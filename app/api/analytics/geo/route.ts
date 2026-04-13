import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get IP from headers (works with Vercel and most hosting providers)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 
               request.headers.get('x-real-ip') || 
               'unknown';

    // In development, return mock data
    if (process.env.NODE_ENV === 'development' || ip === 'unknown' || ip === '127.0.0.1' || ip === '::1') {
      return NextResponse.json({
        country: 'Uganda',
        countryCode: 'UG',
        city: 'Kampala',
        ip: 'dev',
      });
    }

    // Try to get geolocation from Vercel's built-in geo headers
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
    const countryCode = request.headers.get('x-vercel-ip-country-region') || 'XX';
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown';

    // If Vercel geo is not available, try ip-api.com (free, no key required)
    if (country === 'Unknown' && ip !== 'unknown') {
      try {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city`, {
          headers: { 'User-Agent': 'LGIHE-Analytics/1.0' }
        });
        
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          if (geoData.status === 'success') {
            return NextResponse.json({
              country: geoData.country,
              countryCode: geoData.countryCode,
              city: geoData.city,
              ip: ip.substring(0, 10) + '...', // Partial IP for privacy
            });
          }
        }
      } catch (error) {
        console.error('Geo lookup failed:', error);
      }
    }

    return NextResponse.json({
      country,
      countryCode,
      city,
      ip: ip.substring(0, 10) + '...',
    });
  } catch (error) {
    console.error('Geo API error:', error);
    return NextResponse.json({
      country: 'Unknown',
      countryCode: 'XX',
      city: 'Unknown',
      ip: 'unknown',
    });
  }
}

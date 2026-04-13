import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/', '/_next/', '/logs/'],
      },
    ],
    sitemap: 'https://lgihe.ac.ug/sitemap.xml',
  };
}

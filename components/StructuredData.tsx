export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Luigi Giussani Institute of Higher Education",
    "alternateName": "LGIHE",
    "url": "https://lgihe.ac.ug",
    "logo": "https://lgihe.ac.ug/images/logo.png",
    "description": "Excellence in higher education, research, and community transformation. Offering undergraduate, diploma, and certificate programs in education.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Luzira, Port Bell Road",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-XXX-XXXXXX",
      "contactType": "Admissions",
      "email": "info@lgihe.ac.ug"
    },
    "sameAs": [
      "https://www.facebook.com/lgihe",
      "https://twitter.com/lgihe",
      "https://www.linkedin.com/school/lgihe"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Luigi Giussani Institute of Higher Education",
    "url": "https://lgihe.ac.ug",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lgihe.ac.ug/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

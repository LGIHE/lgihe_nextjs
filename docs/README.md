# LGIHE Website Documentation

This folder contains technical documentation for the LGIHE website features and systems.

## Available Documentation

### Abuse Reporting System

A confidential platform for reporting incidents of abuse, harassment, and safety concerns.

#### Getting Started
- **[Implementation Summary](./IMPLEMENTATION-SUMMARY.md)** ⭐ - Start here! Quick overview of what was created and next steps
- **[Deployment Checklist](./DEPLOYMENT-CHECKLIST.md)** - Step-by-step guide for deploying to production

#### Technical Documentation
- **[Full Documentation](./abuse-reporting-system.md)** - Comprehensive guide covering architecture, implementation, testing, and maintenance
- **[Backend Quick Start](./abuse-reporting-backend-quickstart.md)** - Quick reference for backend developers implementing the API
- **[Laravel Backend Example](./laravel-backend-example.md)** - Complete Laravel code examples (controller, model, migration, email template)
- **[Flow Diagrams](./abuse-reporting-flow-diagram.md)** - Visual representations of system flows and data processing
- **[UI Guide](./abuse-reporting-ui-guide.md)** - Visual design, user experience, and accessibility features

#### Quick Links
- Frontend: `/app/report-abuse/page.tsx`
- API Route: `/app/api/report-abuse/route.ts`
- Live Page: `https://lgihe.ac.ug/report-abuse`

---

## Documentation Standards

When adding new documentation:

1. **Create descriptive filenames** using kebab-case (e.g., `feature-name-guide.md`)
2. **Include a table of contents** for documents longer than 3 sections
3. **Add code examples** where applicable
4. **Document all API endpoints** with request/response formats
5. **Include troubleshooting sections** for common issues
6. **Update this README** with links to new documentation

---

## Contributing

When updating documentation:

- Keep technical accuracy as the top priority
- Use clear, concise language
- Include practical examples
- Update version numbers and dates
- Test all code examples before documenting

---

## Contact

For documentation questions or updates:
- **IT Department**: tech@lgihe.ac.ug
- **Development Team**: dev@lgihe.ac.ug

---

**Last Updated**: May 5, 2026

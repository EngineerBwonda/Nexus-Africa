import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Review the basic website and service inquiry terms for Nexus Africa.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <main className="container py-5" style={{ maxWidth: "860px" }}>
      <h1 className="mb-4">Terms of Service</h1>
      <p>
        By using this website, you agree to use the information and contact
        forms for legitimate business inquiries related to Nexus Africa services.
      </p>
      <p>
        Project details, timelines, pricing, and deliverables are confirmed
        through written proposals or agreements before work begins.
      </p>
      <p>
        Website content is provided for general information and may be updated
        as our services evolve.
      </p>
    </main>
  );
}

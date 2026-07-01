import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Nexus Africa handles contact information and project inquiry details shared through the website.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="container py-5" style={{ maxWidth: "860px" }}>
      <h1 className="mb-4">Privacy Policy</h1>
      <p>
        Nexus Africa uses information submitted through this website to respond
        to inquiries, discuss project requirements, and provide relevant
        services.
      </p>
      <p>
        We do not sell personal information. Contact details, project messages,
        and business information are used only for communication, support, and
        service delivery.
      </p>
      <p>
        To request an update or deletion of information you have shared with us,
        contact us at{" "}
        <a href="mailto:hello@nexusafrica.com">hello@nexusafrica.com</a>.
      </p>
    </main>
  );
}

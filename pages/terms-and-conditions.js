import Head from "next/head";
import Layout from "../components/Layout";
import LazySection from "../components/LazySection";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Tarmac - Terms & Conditions</title>
        <meta name="description" content="Tarmac terms and conditions" />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="app-title-font app-type-heading text-4xl text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="app-type-body text-gray-600 mb-6">Last updated: December 5, 2025</p>
          <p className="app-type-body text-gray-700 leading-relaxed mb-8">
            Welcome to Tarmac! By using our website or mobile app ("Service"),
            you agree to these Terms of Service.
          </p>

          <LazySection minHeight={220}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">1. Use of Service</h2>
            <p className="app-type-body text-gray-700 mb-3">
              You agree to use Tarmac only for lawful purposes and in
              accordance with these terms. You must not:
            </p>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1">
              <li>Abuse, disrupt, or exploit the Service.</li>
              <li>Attempt to reverse-engineer, copy, or resell the Service.</li>
              <li>Upload harmful content (malware, spam, abusive language).</li>
            </ul>
            </section>
          </LazySection>

          <LazySection minHeight={220}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              2. Account Responsibilities
            </h2>
            <p className="app-type-body text-gray-700 mb-3">You are responsible for:</p>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1 mb-4">
              <li>Maintaining your account credentials.</li>
              <li>Ensuring information you provide is accurate.</li>
              <li>All activity that occurs under your account.</li>
            </ul>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We may suspend or terminate accounts violating these terms.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={200}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">3. User Content</h2>
            <p className="app-type-body text-gray-700 leading-relaxed mb-4">
              You retain ownership of the content you submit (photos, reviews,
              check-ins). By submitting, you grant Tarmac a non-exclusive,
              royalty-free license to display that content within the app.
            </p>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We reserve the right to remove content that violates guidelines or
              is inappropriate.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={140}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              4. XP, Badges, and Gamified Features
            </h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              XP values, badges, travel categories, and rankings are for
              entertainment and community engagement. We may modify, remove, or
              update these features without notice.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={140}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              All branding, logos, illustrations, designs, and features within
              Tarmac are owned by Tarmac unless otherwise stated. You may not
              copy or reuse them without permission.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={130}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              6. Location-Based Features
            </h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              Some features require optional access to your device's location.
              You are responsible for granting or revoking permissions.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={210}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="app-type-body text-gray-700 mb-3">
              The Service is provided "as is" without warranties of any kind. We
              do not guarantee:
            </p>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1">
              <li>Uninterrupted service.</li>
              <li>Accuracy of travel data, maps, or XP calculations.</li>
              <li>Freedom from bugs or errors.</li>
            </ul>
            </section>
          </LazySection>

          <LazySection minHeight={200}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="app-type-body text-gray-700 mb-3">
              To the fullest extent allowed by law, Tarmac is not liable for:
            </p>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1">
              <li>Loss of data.</li>
              <li>Inaccurate information.</li>
              <li>Travel decisions made based on the platform.</li>
              <li>
                Any damages resulting from use or inability to use the Service.
              </li>
            </ul>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">9. Termination</h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We may suspend or terminate access to the Service at any time for
              violations or misuse.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We may modify these Terms at any time. Your continued use of the
              Service means you accept the updated terms.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section>
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">11. Contact Us</h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              For support or clarification:{" "}
              <a
                href="mailto:manmohan.labh@travelwithtarmac.com"
                className="text-gray-900 underline"
              >
                manmohan.labh@travelwithtarmac.com
              </a>
            </p>
            </section>
          </LazySection>
        </div>
      </Layout>
    </>
  );
}

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import LazySection from "../components/LazySection";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Tarmac privacy policy to understand how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
        noindex={true}
      />
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="app-title-font app-type-heading text-4xl text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="app-type-body text-gray-600 mb-6">Last updated: December 5, 2025</p>
          <p className="app-type-body text-gray-700 leading-relaxed mb-8">
            Tarmac ("we", "our", "us") operates the Tarmac website and mobile
            application ("Service"). This Privacy Policy explains how we collect,
            use, and protect your information when you use our Service.
          </p>

          <LazySection minHeight={340}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <h3 className="app-type-body-strong text-gray-900 mb-2">a. Information You Provide</h3>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1 mb-4">
              <li>Account details such as name, email, phone number.</li>
              <li>Profile information like display picture or username.</li>
              <li>Check-ins, XP logs, and travel badges you interact with.</li>
            </ul>

            <h3 className="app-type-body-strong text-gray-900 mb-2">
              b. Automatically Collected Information
            </h3>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1 mb-4">
              <li>Device information (model, OS, browser type).</li>
              <li>Log data (IP address, timestamps).</li>
              <li>
                Approximate location only when you choose to enable it for
                features like distance display or check-ins.
              </li>
            </ul>

            <h3 className="app-type-body-strong text-gray-900 mb-2">c. Cookies & Local Storage</h3>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We may store cookies or local storage to remember preferences and
              improve performance.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={220}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="app-type-body text-gray-700 mb-3">We use collected data to:</p>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1">
              <li>Provide core features (explore map, badges, XP, check-ins).</li>
              <li>
                Personalize content, showing distances from your saved home
                location.
              </li>
              <li>Improve performance, fix bugs, and enhance user experience.</li>
              <li>
                Send optional updates or notifications (only with your consent).
              </li>
            </ul>
            </section>
          </LazySection>

          <LazySection minHeight={210}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              3. How We Share Your Information
            </h2>
            <p className="app-type-body text-gray-700 mb-3">We do not sell your personal data. We may share data with:</p>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1">
              <li>Service providers that support hosting, analytics, or error tracking.</li>
              <li>Legal authorities if required by law.</li>
            </ul>
            </section>
          </LazySection>

          <LazySection minHeight={150}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">4. Data Security</h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We use reasonable technical and organizational measures to protect
              your data. However, no method of transmission over the internet is
              100% secure.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={150}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">5. Your Choices</h2>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1">
              <li>You can update or delete your account at any time.</li>
              <li>You can disable location permissions at any time.</li>
              <li>You may request a copy of your data by contacting us.</li>
            </ul>
            </section>
          </LazySection>

          <LazySection minHeight={760}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">6. Account Deletion</h2>
            <p className="app-type-body text-gray-700 leading-relaxed mb-4">
              We respect your right to delete your account and associated data.
              If you wish to permanently delete your Tarmac account, please
              follow the process below:
            </p>

            <h3 className="app-type-body-strong text-gray-900 mb-2">How to Request Account Deletion</h3>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1 mb-4">
              <li>
                Send an email to{" "}
                <a
                  href="mailto:manmohan.labh@travelwithtarmac.com"
                  className="text-gray-900 underline"
                >
                  manmohan.labh@travelwithtarmac.com
                </a>{" "}
                with the subject line "Account Deletion Request".
              </li>
              <li>
                Include your registered email address and username in the request
                to help us identify your account.
              </li>
              <li>
                Specify whether you want to delete your entire account or only
                certain parts of your data (e.g., travel history, photos,
                check-ins, profile information).
              </li>
              <li>
                Our team will verify your identity and process your request
                within 7-10 business days.
              </li>
              <li>
                You will receive a confirmation email once your account has been
                successfully deleted.
              </li>
            </ul>

            <h3 className="app-type-body-strong text-gray-900 mb-2">Partial Data Deletion</h3>
            <p className="app-type-body text-gray-700 leading-relaxed mb-4">
              If you prefer not to delete your entire account, you can request
              deletion of specific data categories such as travel journals,
              photos, check-in history, XP records, or badges. Simply specify
              which data you would like removed in your email request, and we
              will process it accordingly while keeping your account active.
            </p>

            <h3 className="app-type-body-strong text-gray-900 mb-2">
              What Happens When You Delete Your Account
            </h3>
            <ul className="app-type-body text-gray-700 list-disc pl-6 space-y-1 mb-4">
              <li>
                All your personal information including name, email, phone
                number, and profile details will be permanently removed from our
                active databases.
              </li>
              <li>
                Your travel history, check-ins, XP points, badges, and digital
                collectibles will be deleted.
              </li>
              <li>
                Any photos, journals, or travel stories you have created will be
                removed from the platform.
              </li>
              <li>
                Your leaderboard rankings and community contributions will be
                anonymized or removed.
              </li>
              <li>
                This action is irreversible and you will not be able to recover
                your account or data after deletion.
              </li>
            </ul>

            <h3 className="app-type-body-strong text-gray-900 mb-2">Data Retention</h3>
            <p className="app-type-body text-gray-700 leading-relaxed">
              Some data may be retained for legal compliance, fraud prevention,
              or dispute resolution purposes for a limited period as required by
              applicable law. This includes transaction records and
              communications with our support team. After the retention period,
              all remaining data will be permanently deleted.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              7. Children's Privacy
            </h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              Tarmac is not intended for users under the age of 13.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              8. Third-Party Services
            </h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              Our Service may contain links to external websites or services
              that we do not operate. We are not responsible for their privacy
              practices.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section className="mb-8">
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Continued use
              of the Service means you accept the updated policy.
            </p>
            </section>
          </LazySection>

          <LazySection minHeight={120}>
            <section>
            <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">10. Contact Us</h2>
            <p className="app-type-body text-gray-700 leading-relaxed">
              For questions or requests, contact:{" "}
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

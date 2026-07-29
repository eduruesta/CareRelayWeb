import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – CareRelay",
};

const SECTIONS = [
  {
    title: "Intellectual property",
    body: "All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider (Eduardo Ruesta).",
  },
  {
    title: "Third-party services",
    body: "The Application uses third-party services that have their own Terms and Conditions, including:\n• Firebase Authentication (Google Sign-In)\n• MongoDB Atlas (data storage)\n• OpenAI (AI-assisted note processing)\n• RevenueCat (subscription management)",
  },
  {
    title: "Not a medical service",
    body: "CareRelay is a coordination and organization tool for families and caregivers. It does not diagnose conditions and does not provide medical, clinical, or emergency advice. AI-assisted suggestions are proposals only — a family member must always review and confirm an entry before it is added to the shared timeline. In a medical emergency, contact emergency services directly.",
  },
  {
    title: "Internet connectivity and charges",
    body: "Some features of the Application require an active internet connection. The Service Provider is not responsible if the Application does not function at full capacity due to lack of Wi-Fi access, or if you have used up your data allowance.",
  },
  {
    title: "Subscriptions",
    body: "Certain features of the Application may require a paid family subscription, processed through the Apple App Store or Google Play. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period, in accordance with the applicable store's policies.",
  },
  {
    title: "Limitation of liability",
    body: "The Service Provider cannot always take responsibility for the way you use the Application. The Service Provider does not accept liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality.",
  },
  {
    title: "Updates and termination",
    body: "The Service Provider may wish to update the Application. You agree to always accept updates when offered. The Service Provider may also wish to stop providing the Application and may terminate its use at any time without notice.",
  },
  {
    title: "Changes to these Terms",
    body: "The Service Provider may periodically update its Terms and Conditions. You are advised to review this page regularly for any changes.",
  },
  {
    title: "Contact us",
    body: "If you have any questions or suggestions about these Terms and Conditions, contact us at eruestadev@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#203A43] to-[#17252A] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-brand-mint hover:text-white mb-6 transition-colors text-sm font-medium"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="text-brand-mint mt-2 text-sm">
            Effective as of July 29, 2026
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-brand-slate leading-relaxed mb-10 whitespace-pre-line">
          These Terms and Conditions apply to the CareRelay mobile application
          (referred to as the &quot;Application&quot;), created by Eduardo
          Ruesta (referred to as the &quot;Service Provider&quot;), offered
          with optional in-app purchases (family subscription).
          {"\n\n"}
          By downloading or using the Application, you automatically agree to
          the following terms. It is strongly recommended that you read and
          understand these terms before using the Application.
        </p>

        {SECTIONS.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-xl font-bold text-brand-care mb-3">
              {section.title}
            </h2>
            <p className="text-brand-slate leading-relaxed whitespace-pre-line">
              {section.body}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-mist/60 py-8 text-center">
        <p className="text-brand-slate/70 text-sm">
          © {new Date().getFullYear()} CareRelay
        </p>
      </div>
    </div>
  );
}

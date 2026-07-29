import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – CareRelay",
};

const SECTIONS: { title: string; body?: string; sub?: { title: string; body: string }[] }[] = [
  {
    title: "What information does the Application obtain and how is it used?",
    sub: [
      {
        title: "Information you provide",
        body: "The Application collects the information you provide when you download and register, such as your name, email address, and the profile of the person you are caring for (e.g. emergency contacts, medications, allergies, and preferences). Registration is required to use the Application's family coordination features.",
      },
      {
        title: "Care and activity information",
        body: "To provide the shared timeline, care plan, and handoff summary, the Application processes the notes, voice recordings, and events you and other family members log (for example medication, meals, symptoms, appointments, and activities). Voice notes are transcribed and, together with text notes, analyzed by an AI service (OpenAI) to propose structured entries — these proposals are only added to the shared timeline after a family member reviews and confirms them.",
      },
      {
        title: "Information collected automatically",
        body: "The Application may also automatically collect certain information, including the type of mobile device you use, a unique device identifier, IP address, mobile operating system, and information about how you use the Application, in order to maintain and improve the service.",
      },
    ],
  },
  {
    title: "Does the Application collect precise real-time location information?",
    body: "No. This Application does not collect precise information about your mobile device's location.",
  },
  {
    title: "Do third parties see or have access to information obtained by the Application?",
    body: "Only aggregated and anonymized data is periodically transmitted to external services to help the Service Provider improve the Application. Care and account data is shared with the following third-party services, which process it on the Service Provider's behalf under their own privacy and security terms:\n• Firebase Authentication (Google Sign-In and account management)\n• MongoDB Atlas (secure storage of care circle, timeline, and profile data)\n• OpenAI (processing of voice and text notes into structured entries)\n• RevenueCat (subscription and payment management)\n\nThe Service Provider does not sell your personal information to third parties.",
  },
  {
    title: "Who can see the information logged in my family's care circle?",
    body: "Care and timeline information is only visible to the members you or another family member has invited into the same care circle. You control who is invited, and members can be removed from the circle at any time by someone with the appropriate role.",
  },
  {
    title: "What are my opt-out rights?",
    body: "You can stop all collection of information by the Application by uninstalling it, using the standard uninstall process available on your mobile device or via the app marketplace. You may also request deletion of your account and associated data at any time by contacting us.",
  },
  {
    title: "Data retention policy",
    body: "The Service Provider will retain the data you and your family provide for as long as your account and care circle remain active, and for a reasonable period afterward. If you would like the Service Provider to delete data you have provided, contact us at eruestadev@gmail.com and we will respond within a reasonable timeframe.",
  },
  {
    title: "Children",
    body: "The Application is intended to help adults coordinate care for a family member and is not directed at children. The Service Provider does not knowingly collect personal information from children under 13 as account holders. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at eruestadev@gmail.com.",
  },
  {
    title: "Security",
    body: "The Service Provider is committed to safeguarding the confidentiality of your information, including sensitive care-related data, and provides physical, electronic, and procedural safeguards to protect the information we process, such as encryption in transit and access controls on the underlying database.",
  },
  {
    title: "Changes",
    body: "This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. You are advised to review this Policy periodically.",
  },
  {
    title: "Your consent",
    body: "By using the Application, you consent to the Service Provider processing your information as set out in this Privacy Policy, now and as amended.",
  },
  {
    title: "Contact us",
    body: "If you have any questions about privacy while using the Application, contact us at eruestadev@gmail.com.",
  },
];

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-brand-mint mt-2 text-sm">
            Effective as of July 29, 2026
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-brand-slate leading-relaxed mb-10">
          This Privacy Policy applies to the CareRelay mobile application
          (referred to as the &quot;Application&quot;), developed by Eduardo
          Ruesta (referred to as the &quot;Service Provider&quot;) and offered
          with optional in-app purchases (family subscription). This service
          is provided &quot;AS IS&quot;.
        </p>

        {SECTIONS.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-xl font-bold text-brand-care mb-3">
              {section.title}
            </h2>
            {section.body && (
              <p className="text-brand-slate leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            )}
            {section.sub?.map((sub) => (
              <div key={sub.title} className="mt-4">
                <h3 className="text-base font-semibold text-brand-ink mb-2">
                  {sub.title}
                </h3>
                <p className="text-brand-slate leading-relaxed">{sub.body}</p>
              </div>
            ))}
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

const FEATURES = [
  {
    title: "Shared timeline",
    desc: "Every medication, meal, symptom, appointment, and activity in one place — grouped by day, filterable by type.",
  },
  {
    title: "Care plan & tasks",
    desc: "Recurring and one-off tasks with a clear owner, a due date, and a status checkbox everyone can see.",
  },
  {
    title: "Voice & text logging",
    desc: "Speak or type a quick note. AI drafts a structured entry for you to review — you always confirm before it's shared.",
  },
  {
    title: "Family circle",
    desc: "Invite relatives and caregivers, assign roles, and know at a glance who's on duty right now.",
  },
  {
    title: "Handoff summary",
    desc: "Before one caregiver steps away, CareRelay puts together a short summary so the next one starts up to speed.",
  },
  {
    title: "Person profile",
    desc: "Emergency contacts, medications, allergies, and preferences, kept in one place instead of a notebook.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-brand-mint/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-brand-carePressed text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What we offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-night mb-4">
            Everything a caregiving family needs
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto leading-relaxed">
            From the daily log to the family circle, CareRelay covers the
            whole loop of caring for someone together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-7 border border-brand-mist/60 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <h3 className="text-lg font-semibold text-brand-night mb-2">
                {feature.title}
              </h3>
              <p className="text-brand-slate leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "One shared view",
    desc: "Every update — a medication, a symptom, a doctor's note — lands in one timeline the whole family can see, instead of scattered texts and calls.",
  },
  {
    title: "Less mental load",
    desc: "A care plan with tasks and reminders means no single person has to hold the whole picture in their head.",
  },
  {
    title: "AI assists, family decides",
    desc: "Voice or text notes are turned into structured entries by AI, but nothing is published to the timeline until a family member confirms it.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-careSoft text-brand-carePressed text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About CareRelay
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-night mb-4">
            Built by a family, for families
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto leading-relaxed">
            Coordinating the care of a parent, grandparent, or loved one
            usually falls on a group chat and a lot of goodwill. CareRelay
            gives that group a shared timeline, a care plan, and a proper
            handoff between caregivers — so nothing falls through the cracks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-brand-sand/60 border border-brand-mist/60 rounded-2xl p-7"
            >
              <h3 className="text-lg font-semibold text-brand-night mb-2">
                {pillar.title}
              </h3>
              <p className="text-brand-slate leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-slate/80 text-sm mt-10 max-w-2xl mx-auto">
          CareRelay does not diagnose and does not give clinical
          recommendations — it helps your family stay organized and informed
          around the care you already provide.
        </p>
      </div>
    </section>
  );
}

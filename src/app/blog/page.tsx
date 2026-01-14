export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1120] to-black py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Page heading */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#facc15]">
            Thrive with Kaushik Blog
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
            Insights on motivation, leadership, stress management, and business growth to help you
            thrive in health, wealth, and mindset.
          </p>
        </section>

        {/* Featured post */}
        <section className="bg-slate-900/70 border border-slate-700/70 rounded-3xl p-6 md:p-8 shadow-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#facc15] mb-3">
            Featured Story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            From Stress to Strength: A Leader&apos;s Transformation
          </h2>
          <p className="text-sm md:text-base text-slate-200 mb-4">
            Discover how one business owner in Delhi used simple daily habits, mindful routines,
            and structured coaching sessions to move from burnout to breakthrough performance.
          </p>
          <p className="text-xs md:text-sm text-slate-300">
            Key themes: stress management, leadership mindset, work–life balance.
          </p>
        </section>

        {/* Grid of posts */}
        <section className="grid gap-6 md:grid-cols-3">
          <article className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 hover:border-[#facc15] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              5-Minute Morning Reset for Leaders
            </h3>
            <p className="text-sm text-slate-200">
              A short routine to calm anxiety, sharpen focus, and start your day in peak state.
            </p>
          </article>

          <article className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 hover:border-[#facc15] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              Handling High-Pressure Client Meetings
            </h3>
            <p className="text-sm text-slate-200">
              Practical tools to stay centered, confident, and persuasive in critical meetings.
            </p>
          </article>

          <article className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-5 hover:border-[#facc15] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              Building a Growth Mindset Team
            </h3>
            <p className="text-sm text-slate-200">
              Coaching ideas to turn your team into self-driven, accountable high performers.
            </p>
          </article>
        </section>

        {/* CTA */}
        <section className="text-center bg-slate-900/70 border border-[#facc15]/60 rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#facc15] mb-3">
            Want Personalized Guidance?
          </h2>
          <p className="text-sm md:text-base text-slate-100 mb-5">
            Book a free consultation with Lalit Kaushik to design a stress management or leadership
            plan tailored to you and your team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm md:text-base font-semibold text-slate-900 shadow-lg hover:bg-yellow-300 transition"
          >
            Book a Session
          </a>
        </section>
      </div>
    </main>
  );
}

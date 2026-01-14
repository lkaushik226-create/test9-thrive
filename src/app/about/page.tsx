export default function About() {
  return (
    <main className="min-h-screen text-tony-white pt-24">
      {/* Hero Section - Tony Black */}
      <section className="bg-gradient-to-br from-tony-black to-tony-gray py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-tony-gold to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
            About Kaushik
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-20 text-tony-white/90 leading-relaxed">
            World-class motivational speaker, life coach & stress management expert serving professionals 
            in Delhi NCR, Mumbai, Bangalore, USA, UK & worldwide.
          </p>
        </div>
      </section>

      {/* Bio Grid */}
      <section className="py-32 px-4 bg-tony-gray">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-tony-white mb-8">
                Transforming Lives Through Proven Strategies
              </h2>
              <p className="text-xl text-tony-white/90 leading-relaxed">
                10+ years helping founders, executives & leaders master stress, build resilience, 
                and achieve breakthrough results.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <li className="flex items-start space-x-4 p-6 bg-tony-white/10 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-xl hover:scale-102 transition-all">
                <div className="w-10 h-10 bg-tony-gold rounded-xl flex items-center justify-center font-bold text-tony-black flex-shrink-0 mt-1">1</div>
                <span>10+ years corporate leadership</span>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-tony-white/10 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-xl hover:scale-102 transition-all">
                <div className="w-10 h-10 bg-tony-gold rounded-xl flex items-center justify-center font-bold text-tony-black flex-shrink-0 mt-1">2</div>
                <span>500+ executives coached</span>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-tony-white/10 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-xl hover:scale-102 transition-all">
                <div className="w-10 h-10 bg-tony-gold rounded-xl flex items-center justify-center font-bold text-tony-black flex-shrink-0 mt-1">3</div>
                <span>Global keynote speaker</span>
              </li>
              <li className="flex items-start space-x-4 p-6 bg-tony-white/10 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-xl hover:scale-102 transition-all">
                <div className="w-10 h-10 bg-tony-gold rounded-xl flex items-center justify-center font-bold text-tony-black flex-shrink-0 mt-1">4</div>
                <span>Delhi NCR based</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-tony-gold/20 to-tony-white/20 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-2xl border border-tony-white/20">
              {/* Your professional photo */}
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-tony-gold to-yellow-500 rounded-2xl mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-tony-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full inline-block">
                    Kaushik Sharma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tony-style Testimonials */}
      <section className="py-32 px-4 bg-tony-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-tony-white">
            Client Success
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-tony-white/5 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-tony-gold mb-2">300%</h3>
              <p className="text-tony-white/80">Performance boost</p>
            </div>
            <div className="text-center p-8 bg-tony-white/5 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-tony-gold mb-2">500+</h3>
              <p className="text-tony-white/80">Executives coached</p>
            </div>
            <div className="text-center p-8 bg-tony-white/5 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-tony-gold mb-2">Global</h3>
              <p className="text-tony-white/80">Reach</p>
            </div>
            <div className="text-center p-8 bg-tony-white/5 backdrop-blur rounded-2xl border border-tony-white/20 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-tony-gold mb-2">5.0</h3>
              <p className="text-tony-white/80">Client rating</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

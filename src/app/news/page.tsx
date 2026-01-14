'use client';
import { useState, useEffect } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'a06ac1a29bca4afe8d3f8d4fb567f670';

  useEffect(() => {
    // Top 10: mental health OR business OR motivation (India focus, recent)
fetch(`https://newsapi.org/v2/everything?q="mental health" OR business OR motivation OR "stress management" OR leadership&language=en&from=2026-01-01&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('News API error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1120] to-black flex items-center justify-center p-6">
        <div className="text-[#facc15] text-xl animate-pulse">Loading top mental health & business news...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1120] to-black py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#facc15]">
            Top 10 Mental Health & Business News
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Latest insights on mental health, stress management, leadership, and business growth from trusted sources.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 10).map((article: any, index: number) => (
            <article
              key={index}
              className="group bg-slate-900/70 border border-slate-700/70 rounded-2xl p-6 hover:border-[#facc15]/80 hover:shadow-2xl hover:shadow-[#facc15]/10 transition-all duration-300 overflow-hidden"
            >
              <div className="mb-4">
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/400x200/1e293b/94a3b8?text=News'}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 group-hover:brightness-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-white line-clamp-2 group-hover:text-[#facc15] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {article.description || 'Read the full story for latest insights on mental health and business.'}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className="text-xs text-slate-400 font-medium">
                    {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#facc15] hover:text-yellow-300 underline decoration-2 transition-all flex items-center gap-1"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="text-center bg-slate-900/70 border border-[#facc15]/60 rounded-3xl p-10 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#facc15] mb-4">
            Stay Ahead with Thrive Insights
          </h2>
          <p className="text-lg text-slate-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform stress into strength. Book a personalized session to master mental health strategies for business success.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#facc15] to-yellow-400 px-10 py-5 text-xl font-bold text-slate-900 shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300"
          >
            Book Free Consultation
          </a>
        </section>
      </div>
    </main>
  );
}

'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log('Form submitted:', data);
    setTimeout(() => {
      setSubmitted(true);
      reset();
      setLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen text-tony-white pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-tony-black to-tony-gray py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-tony-gold to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-tony-white/90 leading-relaxed">
            Get personalized quotes for stress coaching, speaking engagements, 
            or VIP sessions. Serving Gurugram, Delhi NCR & worldwide.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 px-4 bg-tony-gray">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-tony-white mb-8">
                Ready to Transform?
              </h2>
              <p className="text-xl text-tony-white/90 leading-relaxed">
                Whether corporate workshops, VIP sessions, or personal coaching—
                connect for custom solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-6 p-8 bg-tony-white/10 backdrop-blur rounded-3xl border border-tony-white/20 hover:shadow-2xl hover:scale-102 transition-all">
                <div className="w-14 h-14 bg-tony-gold rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 text-xl font-bold text-tony-black">
                  📧
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-tony-white mb-3">Email</h3>
                  <p className="text-tony-white/90 text-lg">hello@thrivewithkaushik.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-8 bg-tony-white/10 backdrop-blur rounded-3xl border border-tony-white/20 hover:shadow-2xl hover:scale-102 transition-all">
                <div className="w-14 h-14 bg-tony-gold rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 text-xl font-bold text-tony-black">
                  📍
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-tony-white mb-3">Location</h3>
                  <p className="text-tony-white/90 text-lg">
                    Gurugram, Haryana<br/>
                    Delhi NCR & Global Service
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-8 bg-tony-white/10 backdrop-blur rounded-3xl border border-tony-white/20 hover:shadow-2xl hover:scale-102 transition-all">
                <div className="w-14 h-14 bg-tony-gold rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 text-xl font-bold text-tony-black">
                  💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-tony-white mb-3">Perfect For</h3>
                  <p className="text-tony-white/90 text-lg">
                    Founders • Directors • Executives<br/>
                    Lawyers • Engineers • Doctors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-tony-white mb-4">Get Your Free Quote</h2>
              <p className="text-tony-white/70 text-xl">VIP sessions • Corporate workshops • Custom programs</p>
            </div>
            
            {submitted ? (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 text-green-100 p-12 rounded-3xl text-center backdrop-blur">
                <div className="text-6xl mb-8">✅</div>
                <h3 className="text-3xl font-bold mb-6">Thank You!</h3>
                <p className="text-xl mb-10 leading-relaxed">Quote request received. Expect personalized reply within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-green-600 text-tony-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all inline-flex items-center space-x-2"
                >
                  <span>Send Another</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <label className="block text-lg font-bold mb-4 text-tony-white/90">Full Name *</label>
                  <input
                    {...register('name', { required: 'Name required' })}
                    className="w-full bg-tony-white/10 border border-tony-white/30 rounded-3xl px-6 py-5 text-tony-white placeholder-tony-white/50 backdrop-blur-xl focus:border-tony-gold focus:outline-none focus:ring-4 focus:ring-tony-gold/20 transition-all text-lg"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2 font-medium">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-lg font-bold mb-4 text-tony-white/90">Email Address *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email required' })}
                    className="w-full bg-tony-white/10 border border-tony-white/30 rounded-3xl px-6 py-5 text-tony-white placeholder-tony-white/50 backdrop-blur-xl focus:border-tony-gold focus:outline-none focus:ring-4 focus:ring-tony-gold/20 transition-all text-lg"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2 font-medium">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-lg font-bold mb-4 text-tony-white/90">Service Interested *</label>
                  <select
                    {...register('service', { required: 'Select service' })}
                    className="w-full bg-tony-white/10 border border-tony-white/30 rounded-3xl px-6 py-5 text-tony-white backdrop-blur-xl focus:border-tony-gold focus:outline-none focus:ring-4 focus:ring-tony-gold/20 transition-all text-lg"
                  >
                    <option value="">Select service...</option>
                    <option value="stress-management">Stress Management Coaching</option>
                    <option value="motivational-speaking">Motivational Speaking Events</option>
                    <option value="business-coaching">Business & Leadership Coaching</option>
                    <option value="vip-offline">VIP Offline Sessions</option>
                    <option value="corporate-workshop">Corporate Workshops</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-sm mt-2 font-medium">{errors.service.message}</p>}
                </div>
                
                <div>
                  <label className="block text-lg font-bold mb-4 text-tony-white/90">Message (Optional)</label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full bg-tony-white/10 border border-tony-white/30 rounded-3xl px-6 py-5 text-tony-white placeholder-tony-white/50 backdrop-blur-xl focus:border-tony-gold focus:outline-none focus:ring-4 focus:ring-tony-gold/20 transition-all text-lg resize-vertical"
                    placeholder="Tell us about your goals, team size, location needs..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-tony-gold to-yellow-500 text-tony-black py-8 px-12 rounded-3xl font-bold text-2xl shadow-3xl hover:shadow-4xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
                >
                  {loading ? (
                    <>
                      <div className="w-8 h-8 border-2 border-tony-black/30 border-t-tony-black rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Quote Request</span>
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';
import { useState } from 'react';
import RazorpayButton from '@/components/RazorpayButton';

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-tony-black to-tony-gray pt-24 px-4 py-20 text-tony-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center drop-shadow-lg bg-gradient-to-r from-tony-gold to-yellow-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        
        {/* Life Coach Stress Management */}
        <div 
          className="bg-tony-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl mb-8 md:mb-12 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border border-tony-white/20 mx-auto max-w-2xl"
          onClick={() => setShowModal(true)}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tony-gold">Life Coach - Stress Management</h2>
          <p className="text-lg text-tony-white/90 mb-6">Free immediate remedies + book expert sessions online/offline.</p>
          <span className="bg-tony-gold text-tony-black px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
            Get Free Tips →
          </span>
        </div>
        
        {/* Other Services */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-tony-white/10 backdrop-blur p-8 rounded-xl border border-tony-white/20 hover:shadow-xl hover:scale-102 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-tony-gold">Motivational Speaker</h3>
            <p className="mb-6 text-tony-white/90">Corporate events, workshops worldwide. Delhi NCR, Mumbai, Global.</p>
            <button className="bg-transparent border-2 border-tony-gold text-tony-gold px-8 py-3 rounded-full font-bold hover:bg-tony-gold hover:text-tony-black transition w-full">
              Request Quote
            </button>
          </div>
          <div className="bg-tony-white/10 backdrop-blur p-8 rounded-xl border border-tony-white/20 hover:shadow-xl hover:scale-102 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-tony-gold">Business Coach</h3>
            <p className="mb-6 text-tony-white/90">Leadership, growth strategies for executives & founders.</p>
            <button className="bg-transparent border-2 border-tony-gold text-tony-gold px-8 py-3 rounded-full font-bold hover:bg-tony-gold hover:text-tony-black transition w-full">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Stress Management Modal - Tony Style */}
      {showModal && (
        <>
          <div 
            className="fixed inset-0 bg-tony-black/70 backdrop-blur-sm z-50" 
            onClick={() => setShowModal(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-b from-tony-white to-tony-lightGray max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 border border-tony-gray/50">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-tony-black">Free Stress Remedies</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-3xl font-bold text-tony-gray-500 hover:text-tony-black ml-auto p-2 hover:bg-tony-gray-200 rounded-lg transition"
                >
                  ✕
                </button>
              </div>
              
              <ul className="space-y-4 mb-12 text-lg text-tony-gray-700 bg-tony-white/50 p-6 rounded-2xl border border-tony-gray-200">
                <li>• <strong>4-7-8 Breathing:</strong> Inhale 4s, hold 7s, exhale 8s (repeat 4x)</li>
                <li>• <strong>Power Walk:</strong> 10 mins brisk outside, focus on footsteps</li>
                <li>• <strong>Progressive Muscle:</strong> Tense/release each body part 5s</li>
                <li>• <strong>Cold Water:</strong> Splash face or drink ice water slowly</li>
                <li>• <strong>Gratitude List:</strong> Write 3 things you're thankful for now</li>
              </ul>
              
              {/* RAZORPAY BUTTONS */}
              <div className="space-y-4">
                <RazorpayButton 
                  amount={1100} 
                  productName="15 min Online Stress Session | Thrive with Kaushik" 
                  keyId="YOUR_RAZORPAY_KEY_ID" 
                />
                <RazorpayButton 
                  amount={1500} 
                  productName="30 min Online Stress Session | Thrive with Kaushik" 
                  keyId="YOUR_RAZORPAY_KEY_ID" 
                />
                <RazorpayButton 
                  amount={2500} 
                  productName="1 Hour Online Stress Session | Thrive with Kaushik" 
                  keyId="YOUR_RAZORPAY_KEY_ID" 
                />
                <button className="w-full bg-gradient-to-r from-tony-black to-tony-gray text-tony-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  VIP Offline Session: Custom Quote
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

'use client';
import { useState } from 'react';

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-black to-primary-white pt-24 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white drop-shadow-lg">
          Our Services
        </h1>
        
        {/* Life Coach Stress Management */}
        <div 
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl mb-8 md:mb-12 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border border-white/20"
          onClick={() => setShowModal(true)}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">Life Coach - Stress Management</h2>
          <p className="text-lg text-white/90 mb-6">Free immediate remedies + book expert sessions online/offline.</p>
          <span className="bg-gold text-black px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition">Get Free Tips →</span>
        </div>
        
        {/* Other Services - Quote forms */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gold">Motivational Speaker</h3>
            <p className="mb-6 text-white/90">Corporate events, workshops worldwide.</p>
            <button className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-black transition">
              Request Quote
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20 hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gold">Business Coach</h3>
            <p className="mb-6 text-white/90">Leadership, growth strategies for executives.</p>
            <button className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-black transition">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Stress Modal */}
      {showModal && (
        <>
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" 
            onClick={() => setShowModal(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-b from-white to-gray-50 max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-primary-black">Free Stress Remedies</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-2xl font-bold text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>
              
              <ul className="space-y-4 mb-12 text-lg text-gray-700">
                <li>• <strong>4-7-8 Breathing:</strong> Inhale 4s, hold 7s, exhale 8s (repeat 4x)</li>
                <li>• <strong>Power Walk:</strong> 10 mins brisk outside, focus on footsteps</li>
                <li>• <strong>Progressive Muscle:</strong> Tense/release each body part 5s</li>
                <li>• <strong>Cold Water:</strong> Splash face or drink ice water slowly</li>
                <li>• <strong>Gratitude List:</strong> Write 3 things you're thankful for now</li>
              </ul>
              
              <div className="space-y-4">
                <button className="w-full bg-gold text-black py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  15 min Online: ₹1100 → Add to Cart
                </button>
                <button className="w-full border-2 border-primary-black py-4 px-8 rounded-xl font-bold text-lg hover:bg-primary-black hover:text-white transition-all">
                  30 min Online: ₹1500 → Add to Cart
                </button>
                <button className="w-full border-2 border-primary-black py-4 px-8 rounded-xl font-bold text-lg hover:bg-primary-black hover:text-white transition-all">
                  1 Hour Online: ₹2500 → Add to Cart
                </button>
                <button className="w-full bg-primary-black text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all">
                  VIP Offline: Request Price
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

'use client';
import { useState } from 'react';

interface RazorpayButtonProps {
  amount: number;
  productName: string;
  keyId: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayButton({ amount, productName, keyId }: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    
    const options = {
      key: keyId,
      amount: amount * 100, // Paise
      currency: 'INR',
      name: 'Thrive with Kaushik',
      description: productName,
      image: '/logo.png',
      handler: (response: any) => {
        alert(`✅ Payment Success!\nID: ${response.razorpay_payment_id}`);
        setLoading(false);
      },
      prefill: {
        name: 'Kaushik Sharma',
        email: 'hello@thrivewithkaushik.com',
      },
      theme: {
        color: '#D4AF37' // Gold
      },
      modal: {
        ondismiss: () => setLoading(false)
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const initRazorpay = () => {
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => handlePayment();
      script.onerror = () => {
        alert('Payment loading failed');
        setLoading(false);
      };
      document.body.appendChild(script);
    } else {
      handlePayment();
    }
  };

  return (
    <button
      onClick={initRazorpay}
      disabled={loading}
      className="w-full bg-gradient-to-r from-yellow-400 to-gold text-black py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          <span>Opening Razorpay...</span>
        </>
      ) : (
        `Pay ₹${amount} Now`
      )}
    </button>
  );
}

'use client';
import { useState } from 'react';
import { create } from 'zustand';
import RazorpayButton from '@/components/RazorpayButton';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  total: number;
}

const useCart = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) => set({ items: [...get().items, product] }),
  total: 0,
}));

export default function Products() {
  const addItem = useCart((state) => state.addItem);
  const cartItems = useCart((state) => state.items);
  const [showCart, setShowCart] = useState(false);
  const [step, setStep] = useState('cart'); // 'cart' or 'address'
  const [address, setAddress] = useState({ name: '', line1: '', city: '', pin: '' });

  const products: Product[] = [
    { id: 1, name: 'Thrive Book Vol 1', price: 599, image: '/book1.jpg', description: 'Stress mastery guide' },
    { id: 2, name: 'Motivation T-Shirt', price: 799, image: '/tshirt1.jpg', description: 'Premium cotton black tee' },
    { id: 3, name: 'Leadership Workbook', price: 1299, image: '/book2.jpg', description: 'Business coach toolkit' },
    { id: 4, name: 'Thrive T-Shirt Gold', price: 999, image: '/tshirt2.jpg', description: 'Limited edition gold print' },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return alert('Cart empty');
    setStep('address');
  };

  const handlePayment = () => {
    if (!address.name || !address.line1 || !address.city || !address.pin) {
      return alert('Please fill all address fields');
    }
    // Razorpay with address saved
    alert(`✅ Address saved!\n${address.name}\n${address.line1}, ${address.city}-${address.pin}\n\nOpening Razorpay for ₹${total}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy to-gray-900 pt-24 px-4 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
            Thrive Store
          </h1>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="bg-gold text-navy px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
          >
            <span>Cart ({cartItems.length})</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:shadow-2xl hover:scale-105 transition-all hover:bg-white/20">
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mb-6 flex items-center justify-center group-hover:from-gold/30">
                <span className="text-4xl opacity-50">{product.image}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gold">₹{product.price}</span>
                <button
                  onClick={() => addItem(product)}
                  className="bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        {showCart && (
          <>
            <div className="fixed inset-0 bg-navy/50 z-40" onClick={() => setShowCart(false)} />
            <div className="fixed right-4 top-24 w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 z-50 max-h-[70vh] overflow-y-auto border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-navy">Shopping Cart</h3>
                <button onClick={() => setShowCart(false)} className="text-2xl font-bold text-gray-500 hover:text-navy">✕</button>
              </div>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Cart empty. Add products above.</p>
              ) : (
                <>
                  {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex justify-between py-4 border-b border-gray-200 last:border-b-0">
                      <div>
                        <h4 className="font-bold text-navy">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-gold">₹{item.price}</span>
                    </div>
                  ))}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-2xl font-bold text-navy mb-6">
                      Total: ₹{total}
                    </div>
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-navy to-gray-900 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl"
                    >
                      Checkout (₹{total})
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* Address Form */}
        {step === 'address' && (
          <>
            <div className="fixed inset-0 bg-navy/70 z-50 flex items-center justify-center p-4" onClick={() => setStep('cart')} />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-white text-navy p-10 rounded-3xl max-w-md w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-200">
                <h3 className="text-3xl font-bold mb-8 text-center">Shipping Address</h3>
                <div className="space-y-6">
                  <input 
                    placeholder="Full Name *" 
                    className="w-full p-5 border border-gray-300 rounded-2xl text-lg focus:ring-4 focus:ring-gold/30 focus:border-gold transition-all" 
                    value={address.name} 
                    onChange={(e) => setAddress({...address, name: e.target.value})} 
                  />
                  <input 
                    placeholder="Address Line 1 *" 
                    className="w-full p-5 border border-gray-300 rounded-2xl text-lg focus:ring-4 focus:ring-gold/30 focus:border-gold transition-all" 
                    value={address.line1} 
                    onChange={(e) => setAddress({...address, line1: e.target.value})} 
                  />
                  <input 
                    placeholder="City *" 
                    className="w-full p-5 border border-gray-300 rounded-2xl text-lg focus:ring-4 focus:ring-gold/30 focus:border-gold transition-all" 
                    value={address.city} 
                    onChange={(e) => setAddress({...address, city: e.target.value})} 
                  />
                  <input 
                    placeholder="PIN Code *" 
                    className="w-full p-5 border border-gray-300 rounded-2xl text-lg focus:ring-4 focus:ring-gold/30 focus:border-gold transition-all" 
                    value={address.pin} 
                    onChange={(e) => setAddress({...address, pin: e.target.value})} 
                  />
                </div>
                <div className="flex gap-4 mt-12 pt-8 border-t border-gray-200">
                  <button 
                    onClick={() => setStep('cart')} 
                    className="flex-1 bg-gray-200 text-navy py-5 rounded-2xl font-bold text-lg hover:bg-gray-300 shadow-lg transition-all"
                  >
                    Back to Cart
                  </button>
                  <button 
                    onClick={handlePayment}
                    className="flex-1 bg-gradient-to-r from-navy to-gray-900 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
                  >
                    Pay ₹{total} Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

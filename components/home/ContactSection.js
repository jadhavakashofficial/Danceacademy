import { useState, useEffect } from 'react';

export default function ContactSection() {
  // Random decorative notes render only after mount to avoid SSR hydration mismatches
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      className="pt-5 pb-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 25%, #FDF9F0 50%, #FFF0E5 75%, #FDF9F0 100%)', backgroundSize: '400% 400%', animation: 'gradientShift 18s ease-in-out infinite' }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        {mounted && [...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#C73664] text-3xl opacity-15"
            style={{
              animation: `floatNote ${8 + Math.random() * 10}s linear infinite ${Math.random() * 5}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 2}rem`
            }}
          >
            {Math.random() > 0.5 ? '♫' : '♪'}
          </div>
        ))}
        <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-gradient-to-br from-[#C73664]/10 via-[#B300B3]/8 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-[10%] w-72 h-72 bg-gradient-to-tl from-[#00A3A3]/8 via-[#00FFF7]/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-[#0C1B33]">Contact </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3]">Sanchay Kathak</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] mx-auto rounded-full mb-4"></div>
          <p className="text-[#2E2E2E]/90 max-w-2xl mx-auto">Begin your journey into the world of Kathak</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-8 rounded-2xl border border-[#C73664]/10 shadow-lg h-full">
            <h3 className="text-xl font-bold mb-6 text-[#0C1B33] flex items-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#C73664] to-[#B300B3] mr-3"></div>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#2E2E2E] text-sm mb-1 font-medium">Your Name</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#C73664] bg-white transition-all" placeholder="Enter your name" />
                  {formErrors.name && <p className="text-sm text-red-600 mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-[#2E2E2E] text-sm mb-1 font-medium">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#C73664] bg-white transition-all" placeholder="your@email.com" />
                  {formErrors.email && <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-[#2E2E2E] text-sm mb-1 font-medium">Phone Number</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#C73664] bg-white transition-all" placeholder="+91" />
                {formErrors.phone && <p className="text-sm text-red-600 mt-1">{formErrors.phone}</p>}
              </div>
              <div>
                <label className="block text-[#2E2E2E] text-sm mb-1 font-medium">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-[#C73664] bg-white transition-all" placeholder="Tell us about your interest..." />
                {formErrors.message && <p className="text-sm text-red-600 mt-1">{formErrors.message}</p>}
              </div>
              <button type="submit" className="mt-2 px-6 py-3.5 rounded-lg font-medium text-white transition-all duration-300 shadow-sm hover:shadow-md w-full" style={{ background: 'linear-gradient(90deg, #C73664, #B300B3)' }}>
                Submit Message
              </button>
              {formSubmitted && <p className="text-green-600 mt-2">Thank you for contacting us!</p>}
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#00A3A3]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00A3A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#00A3A3] text-sm uppercase tracking-wider">Email</h4>
                <p className="text-[#2E2E2E] mt-1">vaishalidhongade9@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#00A3A3]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00A3A3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#00A3A3] text-sm uppercase tracking-wider">Locations</h4>
                <p className="text-[#2E2E2E] mt-1">Chinchwad, Nigdi, Ravet</p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
              <h4 className="font-bold text-[#00A3A3] text-sm uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/share/18mcBsf3Zr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-[#E2E8F0] hover:shadow hover:border-[#1877F2]/30 transition-all" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/rajashreedhongade.kathak?igsh=dTJzaDBvMGh0bXV3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-[#E2E8F0] hover:shadow hover:border-[#E1306C]/30 transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="#E1306C" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://youtube.com/@vaishalipalsule1402?si=wfUcP9AghxdnN2h5" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-[#E2E8F0] hover:shadow hover:border-red-400/30 transition-all" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="#FF0000" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://wa.me/917507234753" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-[#E2E8F0] hover:shadow hover:border-green-400/30 transition-all" aria-label="WhatsApp">
                  <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-8px) translateX(5px) rotate(1deg) scale(1.01); }
          66% { transform: translateY(-4px) translateX(-4px) rotate(-0.5deg) scale(0.99); }
        }
        @keyframes floatNote {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-15px) translateX(5px) rotate(5deg); opacity: 0.25; }
          100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.15; }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}


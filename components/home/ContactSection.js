import { useState } from 'react';

export default function ContactSection() {
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
        {[...Array(12)].map((_, i) => (
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
                {[
                  { icon: 'fab fa-facebook-f', color: '#1877F2', name: 'Facebook' },
                  { icon: 'fab fa-instagram', color: '#E1306C', name: 'Instagram' },
                  { icon: 'fab fa-youtube', color: '#FF0000', name: 'YouTube' },
                  { icon: 'fab fa-whatsapp', color: '#25D366', name: 'WhatsApp' }
                ].map((social, index) => (
                  <a key={index} href="#" className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-[#E2E8F0] hover:shadow transition-all" aria-label={social.name}>
                    <i className={`${social.icon} text-lg`} style={{ color: social.color }}></i>
                  </a>
                ))}
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


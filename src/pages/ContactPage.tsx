import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollReveal from '../components/ScrollReveal';

interface ContactPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactPage({ currentPage, onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen montserrat-font bg-[#f8fafc] text-[#1e293b]">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <section className="bg-[#2c3e55] text-white text-center pt-32 pb-12 px-6 md:pt-36 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            We are ready to support your operations. Reach out to our team for inquiries,
            support, or partnership opportunities.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 w-full">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f08a3d] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f08a3d] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f08a3d] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f08a3d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f08a3d] focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#f08a3d] hover:bg-[#e0792c] text-white text-sm font-semibold py-3 px-8 rounded transition-colors duration-200 shadow-sm"
                >
                  Submit Message
                </button>
              </form>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="w-full h-64 sm:h-72 rounded-lg overflow-hidden border border-slate-300 shadow-inner">
                <iframe
                  title="Corporate Headquarters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.7905486891473!2d-95.3635677244573!3d29.75477437507068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf236f0a7707%3A0xe5d7c3ebf9a2dab6!2s1401%20McKinney%20St%2C%20Houston%2C%20TX%2077010%2C%20USA!5e0!3m2!1sen!2sng!4v1787053333665!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-slate-200 flex-1">
                <h2 className="text-xl font-bold mb-6 text-slate-900">
                  Contact Information
                </h2>
                
                <div className="space-y-6 text-sm">
                  <div className="flex items-start space-x-3.5">
                    <svg className="w-5 h-5 text-[#f08a3d] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Corporate Headquarters</span>
                      <p className="text-slate-600">1401 McKinney St</p>
                      <p className="text-slate-600">Houston, TX 77010, USA</p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-start space-x-3.5">
                    <svg className="w-5 h-5 text-[#f08a3d] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Main Phone</span>
                      <p className="text-slate-600">1-800-PETRA-LOG</p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex items-start space-x-3.5">
                    <svg className="w-5 h-5 text-[#f08a3d] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">General Inquiries</span>
                      <p className="text-slate-600">ops@petramidstream.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={200}>
          <div className="mt-12 md:mt-16 text-center border-t border-slate-200 pt-8 pb-4">
            <div className="inline-flex items-center justify-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-[#f08a3d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-slate-800">
                Emergency? Call our 24/7 Dispatch line:
              </h3>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#f08a3d] tracking-wide">
              1-800-PETRA-911
            </p>
          </div>
        </ScrollReveal>
      </main>

      <ScrollToTopButton />

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollReveal from '../components/ScrollReveal';

// Online placeholder image URLs
const servicesHeroBg = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80';
const upstreamImg = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
const midstreamImg = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80';
const storageImg = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
const consultingImg = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';

interface ServicesPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ currentPage, onNavigate }: ServicesPageProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg-main antialiased text-text-main">
      {/* Scroll Utilities */}
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Floating Header / Navigation */}
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-grow montserrat-font">
        {/* HERO BANNER SECTION */}
        <section
          className="relative py-28 md:py-36 flex items-center justify-center bg-primary-dark overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${servicesHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none animate-pulse-slow" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <ScrollReveal durationMs={800} distancePx={30}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Our Services
              </h1>
            </ScrollReveal>

            <ScrollReveal durationMs={800} delayMs={150} distancePx={20}>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                Comprehensive energy infrastructure solutions built on reliability, safety, and operational excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* SERVICES CONTENT SECTION */}
        <section className="py-16 md:py-24 bg-bg-alt/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20 md:space-y-28">

            {/* SERVICE 1: UPSTREAM EXTRACTION (Mobile: Image top | Desktop: Image right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal distancePx={40} delayMs={150} className="order-1 lg:order-2">
                <div className="bg-white p-2 rounded-md shadow-md border border-border-custom/50">
                  <img
                    src={upstreamImg}
                    alt="Upstream Extraction Drilling Rig"
                    className="w-full h-[320px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal distancePx={40} className="order-2 lg:order-1">
                <div className="flex flex-col space-y-5">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                    Upstream Extraction
                  </h2>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    We utilize advanced extraction methodologies ensuring maximum yield while maintaining stringent environmental and safety compliance.
                  </p>

                  <ul className="space-y-4 pt-2">
                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>State-of-the-art drilling technologies for precision operations.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Rigorous safety protocols exceeding industry standards.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Real-time monitoring and environmental impact mitigation.</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                      }}
                      className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* SERVICE 2: MIDSTREAM LOGISTICS (Mobile: Image top | Desktop: Image left) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal distancePx={40} delayMs={150} className="order-1 lg:order-1">
                <div className="bg-white p-2 rounded-md shadow-md border border-border-custom/50">
                  <img
                    src={midstreamImg}
                    alt="Midstream Logistics Pipeline System"
                    className="w-full h-[320px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal distancePx={40} className="order-2 lg:order-2">
                <div className="flex flex-col space-y-5">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                    Midstream Logistics
                  </h2>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Our robust pipeline networks provide efficient, secure, and continuous transport of energy resources across vast distances.
                  </p>

                  <ul className="space-y-4 pt-2">
                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                      <span>Optimized routing algorithms for maximum transport efficiency.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <span>Continuous pipeline integrity monitoring systems.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </span>
                      <span>Seamless integration with regional storage and terminal hubs.</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                      }}
                      className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* SERVICE 3: STORAGE & LOGISTICS (Mobile: Image top | Desktop: Image right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal distancePx={40} delayMs={150} className="order-1 lg:order-2">
                <div className="bg-white p-2 rounded-md shadow-md border border-border-custom/50">
                  <img
                    src={storageImg}
                    alt="Storage and Logistics Tank Terminal"
                    className="w-full h-[320px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal distancePx={40} className="order-2 lg:order-1">
                <div className="flex flex-col space-y-5">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                    Storage & Logistics
                  </h2>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Strategically located terminal facilities offering high-capacity storage solutions designed for reliability and rapid deployment.
                  </p>

                  <ul className="space-y-4 pt-2">
                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <ellipse cx="12" cy="5" rx="8" ry="3" />
                          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                        </svg>
                      </span>
                      <span>High-volume storage capacity tailored to market demands.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span>Strategic placement at critical infrastructure junctions.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </span>
                      <span>Advanced inventory management and automated distribution tracking.</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                      }}
                      className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* SERVICE 4: STRATEGIC CONSULTING (Mobile: Image top | Desktop: Image left) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal distancePx={40} delayMs={150} className="order-1 lg:order-1">
                <div className="bg-white p-2 rounded-md shadow-md border border-border-custom/50">
                  <img
                    src={consultingImg}
                    alt="Strategic Consulting Operations Control Center"
                    className="w-full h-[320px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal distancePx={40} className="order-2 lg:order-2">
                <div className="flex flex-col space-y-5">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                    Strategic Consulting
                  </h2>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Expert advisory services guiding your energy operations through complex regulatory landscapes and operational bottlenecks.
                  </p>

                  <ul className="space-y-4 pt-2">
                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                      <span>Comprehensive regulatory compliance and risk assessment.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main pb-3 border-b border-border-custom/40">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <span>Operational workflow optimization for increased throughput.</span>
                    </li>

                    <li className="flex items-start space-x-3 text-sm text-text-main">
                      <span className="flex-shrink-0 text-amber-500 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </span>
                      <span>Data-driven strategic planning and market analysis.</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                      }}
                      className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <section className="bg-[#2d3a52] py-16 px-6 md:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Scale your operations with Petra
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                Partner with us for reliable, efficient, and forward-thinking energy infrastructure solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
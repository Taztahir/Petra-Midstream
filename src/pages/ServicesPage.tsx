import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopButton from '../components/ScrollToTopButton';

import serviceHeroBg from '../assets/midstream_services.png';

import upstreamImg from '../assets/services/upstream-extraction.png';
import midstreamImg from '../assets/services/midstream-logistics.png';
import storageImg from '../assets/services/storage-logistics.png';
import consultingImg from '../assets/services/strategic-consulting.png';

interface ServicesPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function ServicesPage({
  currentPage,
  onNavigate,
}: ServicesPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg-main text-text-main">
      {/* Scroll utilities */}
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      <main className="flex-grow montserrat-font">

        {/* ================= HERO ================= */}
        <section
          className="relative flex items-center justify-center min-h-[420px] px-6 py-32 bg-primary-dark overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(15, 23, 42, 0.78),
                rgba(15, 23, 42, 0.88)
              ),
              url(${serviceHeroBg})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Background effect */}
          <div className="absolute inset-0 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">

            <ScrollReveal durationMs={800} distancePx={30}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Our Services
              </h1>
            </ScrollReveal>

            <ScrollReveal
              durationMs={800}
              delayMs={150}
              distancePx={20}
            >
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
                Comprehensive energy infrastructure solutions built on
                reliability, safety, and operational excellence.
              </p>
            </ScrollReveal>

          </div>
        </section>


        {/* ================= SERVICES ================= */}
        <section className="py-16 md:py-24 bg-bg-alt/30">

          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20 md:space-y-28">

            {/* ================= SERVICE 1 ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Image */}
              <ScrollReveal
                distancePx={40}
                delayMs={100}
                className="order-1 lg:order-2"
              >
                <div className="bg-white p-2 rounded-lg shadow-md border border-border-custom/50">
                  <img
                    src={upstreamImg}
                    alt="Upstream Extraction"
                    className="w-full h-[300px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                distancePx={40}
                className="order-2 lg:order-1"
              >
                <div className="space-y-5">

                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
                    Upstream Extraction
                  </h2>

                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    We utilize advanced extraction methodologies ensuring
                    maximum yield while maintaining stringent environmental
                    and safety compliance.
                  </p>

                  <ul className="space-y-3">

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        State-of-the-art drilling technologies for precision
                        operations.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Rigorous safety protocols exceeding industry
                        standards.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Real-time monitoring and environmental impact
                        mitigation.
                      </span>
                    </li>

                  </ul>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-3 inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105"
                  >
                    Get a Quote
                  </button>

                </div>
              </ScrollReveal>

            </div>


            {/* ================= SERVICE 2 ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Image */}
              <ScrollReveal
                distancePx={40}
                delayMs={100}
                className="order-1 lg:order-1"
              >
                <div className="bg-white p-2 rounded-lg shadow-md border border-border-custom/50">
                  <img
                    src={midstreamImg}
                    alt="Midstream Logistics"
                    className="w-full h-[300px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                distancePx={40}
                className="order-2 lg:order-2"
              >
                <div className="space-y-5">

                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
                    Midstream Logistics
                  </h2>

                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Our robust pipeline networks provide efficient, secure,
                    and continuous transport of energy resources across vast
                    distances.
                  </p>

                  <ul className="space-y-3">

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Optimized routing for maximum transport efficiency.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Continuous pipeline integrity monitoring systems.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Seamless integration with storage and terminal hubs.
                      </span>
                    </li>

                  </ul>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-3 inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105"
                  >
                    Get a Quote
                  </button>

                </div>
              </ScrollReveal>

            </div>


            {/* ================= SERVICE 3 ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Image */}
              <ScrollReveal
                distancePx={40}
                delayMs={100}
                className="order-1 lg:order-2"
              >
                <div className="bg-white p-2 rounded-lg shadow-md border border-border-custom/50">
                  <img
                    src={storageImg}
                    alt="Storage and Logistics"
                    className="w-full h-[300px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                distancePx={40}
                className="order-2 lg:order-1"
              >
                <div className="space-y-5">

                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
                    Storage & Logistics
                  </h2>

                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Strategically located terminal facilities offering
                    high-capacity storage solutions designed for reliability
                    and rapid deployment.
                  </p>

                  <ul className="space-y-3">

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        High-volume storage capacity tailored to market
                        demands.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Strategic placement at critical infrastructure
                        junctions.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Advanced inventory and distribution tracking.
                      </span>
                    </li>

                  </ul>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-3 inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105"
                  >
                    Get a Quote
                  </button>

                </div>
              </ScrollReveal>

            </div>


            {/* ================= SERVICE 4 ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Image */}
              <ScrollReveal
                distancePx={40}
                delayMs={100}
                className="order-1 lg:order-1"
              >
                <div className="bg-white p-2 rounded-lg shadow-md border border-border-custom/50">
                  <img
                    src={consultingImg}
                    alt="Strategic Consulting"
                    className="w-full h-[300px] md:h-[380px] object-cover rounded"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                distancePx={40}
                className="order-2 lg:order-2"
              >
                <div className="space-y-5">

                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
                    Strategic Consulting
                  </h2>

                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    Expert advisory services guiding your energy operations
                    through complex regulatory landscapes and operational
                    challenges.
                  </p>

                  <ul className="space-y-3">

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Comprehensive regulatory compliance and risk
                        assessment.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Operational workflow optimization for increased
                        throughput.
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>
                        Data-driven strategic planning and market analysis.
                      </span>
                    </li>

                  </ul>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-3 inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded shadow transition-all duration-300 hover:scale-105"
                  >
                    Get a Quote
                  </button>

                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="bg-[#2d3a52] py-16 px-6 text-center text-white">

          <div className="max-w-4xl mx-auto">

            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Scale your operations with Petra
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <p className="mt-5 text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                Partner with us for reliable, efficient, and forward-thinking
                energy infrastructure solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-7 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded shadow-md transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </button>
            </ScrollReveal>

          </div>

        </section>

      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
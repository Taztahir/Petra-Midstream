import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

// Import local premium assets
import heroBg from '../assets/hero_bg.jpg';
import midstreamFacility from '../assets/midstream_facility.jpg';

interface HomePageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function HomePage({ currentPage, onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg-main antialiased text-text-main">
      {/* Scroll utils */}
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Floating Header / Navigation */}
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-grow montserrat-font">
        {/* HERO SECTION */}
        <section
          className="relative h-screen montserrat-font flex items-center justify-center pt-32 pb-24 bg-primary-dark overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
          }}
        >
          {/* Subtle moving light effect behind hero text */}
          <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none animate-pulse-slow" />

          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center relative z-10">
            {/* Animated Title */}
            <ScrollReveal durationMs={1000} distancePx={40}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
                Reliable Midstream Solutions for a Global Energy Future
              </h1>
            </ScrollReveal>

            {/* Animated Subtitle */}
            <ScrollReveal durationMs={1000} delayMs={200} distancePx={30}>
              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl font-light">
                Providing industry-proven drilling and strategic pipeline logistics with uncompromising safety standards.
              </p>
            </ScrollReveal>

            {/* Animated Button */}
            <ScrollReveal durationMs={1000} delayMs={400} distancePx={20}>
              <div className="mt-8">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Our Services
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* STATS SECTION (Countable) */}
        <section className="bg-bg-main border-b border-border-custom relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
            <ScrollReveal durationMs={600} distancePx={15}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {/* Stat 1 */}
                <div className="text-center stats-divider flex flex-col justify-center transition-all duration-300 hover:scale-105">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">
                    <AnimatedCounter end={25} suffix="+" />
                  </span>
                  <span className="mt-2 text-sm font-medium text-text-muted uppercase tracking-wider">
                    Years Experience
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="text-center stats-divider flex flex-col justify-center transition-all duration-300 hover:scale-105">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">
                    <AnimatedCounter end={500} suffix="+" />
                  </span>
                  <span className="mt-2 text-sm font-medium text-text-muted uppercase tracking-wider">
                    Projects Completed
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="text-center stats-divider flex flex-col justify-center transition-all duration-300 hover:scale-105">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">
                    <AnimatedCounter end={1.2} suffix="M" decimals={1} />
                  </span>
                  <span className="mt-2 text-sm font-medium text-text-muted uppercase tracking-wider">
                    Barrels/Day
                  </span>
                </div>

                {/* Stat 4 */}
                <div className="text-center stats-divider flex flex-col justify-center transition-all duration-300 hover:scale-105">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary">
                    <AnimatedCounter end={99.9} suffix="%" decimals={1} />
                  </span>
                  <span className="mt-2 text-sm font-medium text-text-muted uppercase tracking-wider">
                    Safety Rating
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CORE CAPABILITIES SECTION */}
        <section id="services" className="bg-bg-alt py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  Core Capabilities
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
              </div>
            </ScrollReveal>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Drilling */}
              <ScrollReveal delayMs={100}>
                <div className="bg-white p-8 rounded shadow-premium border border-border-custom/50 flex flex-col h-full justify-between transition-all duration-300 hover:border-accent group">
                  <div>
                    <div className="w-12 h-12 rounded bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600 transition-colors duration-300 group-hover:text-white" stroke="currentColor" fill="none" strokeWidth="2">
                        <path d="M12 2L4 22h16L12 2z" />
                        <path d="M12 2v20M6 17h12M8 12h8" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Drilling
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      Delivering advanced oil and gas drilling services with cutting-edge technology to optimize recovery and efficiency safely.
                    </p>
                  </div>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services');
                    }}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Card 2: Pipeline Transport */}
              <ScrollReveal delayMs={200}>
                <div className="bg-white p-8 rounded shadow-premium border border-border-custom/50 flex flex-col h-full justify-between transition-all duration-300 hover:border-accent group">
                  <div>
                    <div className="w-12 h-12 rounded bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600 transition-colors duration-300 group-hover:text-white" stroke="currentColor" fill="none" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
                        <circle cx="12" cy="5" r="1" fill="currentColor" />
                        <circle cx="12" cy="19" r="1" fill="currentColor" />
                        <circle cx="5" cy="12" r="1" fill="currentColor" />
                        <circle cx="19" cy="12" r="1" fill="currentColor" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Pipeline Transport
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      Promoting seamless gathering and distribution through strategic transmission networks, minimizing downtime and optimizing resource flow.
                    </p>
                  </div>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services');
                    }}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Card 3: Storage & Logistics */}
              <ScrollReveal delayMs={300}>
                <div className="bg-white p-8 rounded shadow-premium border border-border-custom/50 flex flex-col h-full justify-between transition-all duration-300 hover:border-accent group">
                  <div>
                    <div className="w-12 h-12 rounded bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600 transition-colors duration-300 group-hover:text-white" stroke="currentColor" fill="none" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="8" ry="3" />
                        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Storage & Logistics
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      High-capacity, terminal storage facilities strategically located to provide flexible inventory management and seamless distribution access.
                    </p>
                  </div>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services');
                    }}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Card 4: Consulting */}
              <ScrollReveal delayMs={400}>
                <div className="bg-white p-8 rounded shadow-premium border border-border-custom/50 flex flex-col h-full justify-between transition-all duration-300 hover:border-accent group">
                  <div>
                    <div className="w-12 h-12 rounded bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600 transition-colors duration-300 group-hover:text-white" stroke="currentColor" fill="none" strokeWidth="2">
                        <path d="M12 20a8 8 0 100-16 8 8 0 000 16z" />
                        <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
                        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Consulting
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      Expert advisory services for infrastructure development, regulatory compliance, risk management, and operational optimization.
                    </p>
                  </div>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services');
                    }}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ENGINEERING SECTION */}
        <section id="about" className="bg-bg-main py-20 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Column: Image */}
              <ScrollReveal distancePx={50}>
                <div className="image-zoom-container shadow-lg border border-border-custom/50">
                  <img
                    src={midstreamFacility}
                    alt="Modern Petra Midstream logistics terminal and pipeline infrastructure"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </ScrollReveal>

              {/* Right Column: Copy */}
              <ScrollReveal distancePx={30} delayMs={150}>
                <div className="flex flex-col space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                    Engineering the Future of Midstream
                  </h2>
                  <p className="text-base text-text-muted leading-relaxed">
                    At Petra Midstream, our mission is to build the critical infrastructure that powers global industries and communities. We are committed to developing and operating world-class facilities that safely and efficiently transport, store, and process resources, supporting the energy transition.
                  </p>
                  <p className="text-base text-text-muted leading-relaxed">
                    Our integrated approach combines decades of industry expertise with cutting-edge engineering technologies. By adhering to the highest environmental standards, we optimize asset performance, guarantee operational integrity, and deliver sustainable value to our partners, customers, and communities.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/about"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('about');
                      }}
                      className="inline-block px-6 py-3 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 rounded"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PARTNER SUCCESS (TESTIMONIAL) */}
        <section className="bg-bg-alt py-20 md:py-24 border-t border-b border-border-custom/50">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-12">
                Partner Success
              </h2>
            </ScrollReveal>

            {/* Testimonial card */}
            <ScrollReveal delayMs={150}>
              <div className="bg-white p-8 md:p-12 rounded shadow-premium border border-border-custom/30 relative max-w-3xl transition-transform duration-500 hover:scale-[1.02]">
                {/* Decorative quotation mark */}
                <span className="absolute top-4 left-6 text-7xl font-serif text-accent/10 select-none">
                  &ldquo;
                </span>
                <p className="text-base sm:text-lg text-text-muted italic leading-relaxed relative z-10">
                  Petra Midstream has consistently demonstrated exceptional operational speed and a collaborative approach to safety. Their pipeline logistics network has fundamentally transformed our distribution efficiency, providing reliable capacity that lets us meet our commitments to our customers.
                </p>
                <div className="mt-8">
                  <h4 className="text-base font-bold text-primary">
                    Robert Sterling
                  </h4>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-1">
                    VP of Operations, Global Energy Corp
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Slider Dots indicators */}
            <div className="flex space-x-2 mt-8">
              <span className="w-2.5 h-2.5 rounded-full bg-accent cursor-pointer transition-all duration-300 hover:scale-125" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-custom hover:bg-accent/40 cursor-pointer transition-colors transition-all duration-300 hover:scale-125" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-custom hover:bg-accent/40 cursor-pointer transition-colors transition-all duration-300 hover:scale-125" />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="bg-accent py-16 px-6 md:px-8 relative overflow-hidden">
          {/* Subtle CTA background patterns */}
          <div className="absolute inset-0 bg-white/5 opacity-40 pointer-events-none transform -skew-y-6 scale-110" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                Ready to optimize your logistics?
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={150}>
              <div className="mt-8">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="inline-block px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Request a Consultation
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

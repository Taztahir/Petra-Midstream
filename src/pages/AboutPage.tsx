import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollReveal from '../components/ScrollReveal';
import aboutHeroBg from '../assets/hero_bg.jpg';

// Online placeholder image URLs
// const aboutHeroBg = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
const alexanderImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
const sarahImg = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
const marcusImg = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80';

interface AboutPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function AboutPage({ currentPage, onNavigate }: AboutPageProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg-main antialiased text-text-main">
      {/* Scroll Utilities */}
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-grow montserrat-font">
        {/* HERO BANNER SECTION */}
        <section
          className="relative py-24 md:py-36 flex items-center justify-center bg-primary-dark overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${aboutHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <ScrollReveal durationMs={800} distancePx={30}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About Petra Midstream
              </h1>
            </ScrollReveal>

            <ScrollReveal durationMs={800} delayMs={150} distancePx={20}>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                Building the infrastructure of tomorrow with unyielding commitment to safety and operational excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <ScrollReveal distancePx={30}>
              <div className="bg-white p-8 md:p-10 rounded-sm border border-stone-200/80 shadow-sm flex flex-col items-start h-full">
                <div className="w-12 h-12 bg-stone-100 rounded flex items-center justify-center mb-6">
                  {/* Shield Icon */}
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-[#2d3a52] mb-4">
                  Our Mission
                </h2>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                  Delivering energy safely and efficiently. We engineer robust midstream solutions that prioritize environmental stewardship and operational integrity, ensuring reliable energy flow across the nation.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal distancePx={30} delayMs={150}>
              <div className="bg-white p-8 md:p-10 rounded-sm border border-stone-200/80 shadow-sm flex flex-col items-start h-full">
                <div className="w-12 h-12 bg-stone-100 rounded flex items-center justify-center mb-6">
                  {/* Lightbulb Icon */}
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-[#2d3a52] mb-4">
                  Our Vision
                </h2>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                  Leading the midstream industry through innovation and integrity. We envision a future where advanced technology and sustainable practices converge to power a resilient energy infrastructure.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* OUR JOURNEY SECTION */}
        <section className="py-16 md:py-24 bg-[#f8f6f4]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d3a52] text-center mb-12 md:mb-16">
                Our Journey
              </h2>
            </ScrollReveal>

            {/* Mobile Vertical Timeline */}
            <div className="md:hidden relative pl-6 border-l-2 border-amber-500/40 space-y-10">
              {/* 1999 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white" />
                <span className="text-xl font-bold text-[#2d3a52] block">1999</span>
                <h3 className="text-xs font-semibold uppercase text-stone-500 mt-1 mb-1">Founded</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Established initial pipeline networks with a focus on safety.
                </p>
              </div>

              {/* 2010 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white" />
                <span className="text-xl font-bold text-[#2d3a52] block">2010</span>
                <h3 className="text-xs font-semibold uppercase text-stone-500 mt-1 mb-1">Expansion</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Significant growth into new geographical basins and terminal operations.
                </p>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white" />
                <span className="text-xl font-bold text-[#2d3a52] block">2022</span>
                <h3 className="text-xs font-semibold uppercase text-stone-500 mt-1 mb-1">Tech Integration</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Implementation of smart-grid monitoring and advanced predictive maintenance.
                </p>
              </div>
            </div>

            {/* Desktop Horizontal Timeline */}
            <div className="hidden md:block relative pt-8">
              {/* Connecting Line */}
              <div className="absolute top-[41px] left-0 right-0 h-0.5 bg-stone-300" />

              <div className="grid grid-cols-3 gap-8 text-center relative z-10">
                {/* 1999 */}
                <ScrollReveal distancePx={20}>
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-[#f8f6f4] mb-4" />
                    <span className="text-2xl font-extrabold text-[#2d3a52]">1999</span>
                    <h3 className="text-xs font-bold uppercase text-stone-700 mt-1 mb-2">Founded</h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
                      Established initial pipeline networks with a focus on safety.
                    </p>
                  </div>
                </ScrollReveal>

                {/* 2010 */}
                <ScrollReveal distancePx={20} delayMs={150}>
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-[#f8f6f4] mb-4" />
                    <span className="text-2xl font-extrabold text-[#2d3a52]">2010</span>
                    <h3 className="text-xs font-bold uppercase text-stone-700 mt-1 mb-2">Expansion</h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
                      Significant growth into new geographical basins and terminal operations.
                    </p>
                  </div>
                </ScrollReveal>

                {/* 2022 */}
                <ScrollReveal distancePx={20} delayMs={300}>
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-[#f8f6f4] mb-4" />
                    <span className="text-2xl font-extrabold text-[#2d3a52]">2022</span>
                    <h3 className="text-xs font-bold uppercase text-stone-700 mt-1 mb-2">Tech Integration</h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
                      Implementation of smart-grid monitoring and advanced predictive maintenance.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </section>

        {/* LEADERSHIP TEAM SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2d3a52] text-center mb-12">
                Our Leadership Team
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Leader 1 */}
              <ScrollReveal distancePx={30}>
                <div className="bg-white border border-stone-200/80 shadow-sm overflow-hidden flex flex-col">
                  <img
                    src={alexanderImg}
                    alt="Alexander Vance - CEO"
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-[#2d3a52]">Alexander Vance</h3>
                    <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mt-1">CEO</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Leader 2 */}
              <ScrollReveal distancePx={30} delayMs={150}>
                <div className="bg-white border border-stone-200/80 shadow-sm overflow-hidden flex flex-col">
                  <img
                    src={sarahImg}
                    alt="Sarah Jenkins - VP Operations"
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-[#2d3a52]">Sarah Jenkins</h3>
                    <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mt-1">VP Operations</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Leader 3 */}
              <ScrollReveal distancePx={30} delayMs={300}>
                <div className="bg-white border border-stone-200/80 shadow-sm overflow-hidden flex flex-col">
                  <img
                    src={marcusImg}
                    alt="Marcus Chen - Chief Engineer"
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-[#2d3a52]">Marcus Chen</h3>
                    <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mt-1">Chief Engineer</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="bg-[#384860] py-16 px-6 md:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Join our team of experts
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <p className="text-white/80 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                We are always looking for driven professionals who share our commitment to safety, innovation, and excellence in the midstream sector.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <div className="pt-2">
                <a
                  href="#careers"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('careers');
                  }}
                  className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Careers
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
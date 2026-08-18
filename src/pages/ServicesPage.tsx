import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScaleOperation from '../domains/ScaleOperation';
import ServiceBody from '../domains/ServiceBody';

// local imports
import serviceHeroBg from '../assets/midstream_services.png';

interface ServicesPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
};


export default function ServicesPage({ currentPage, onNavigate }: ServicesPageProps) {
  return (
    <div className="flex flex-col min-h-screen montserrat-font bg-bg-main text-text-main">
      {/* Scroll utils */}
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Floating header */}
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <main className="grow montserrat-font">
        {/* HERO SECTION */}
        <figure
          className="relative flex items-center justify-center pt-32 pb-24 bg-primary-dark overflow-hidden h-120 "
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${serviceHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
          }}
        >
          {/* Subtle moving light effect behind hero text */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none animate-pulse-slow" />
        <figure className="max-w-3xl mx-auto px-6 text-center ">
           <ScrollReveal durationMs={1000} distancePx={40}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Services
            </h1>
           </ScrollReveal>

            <ScrollReveal durationMs={1000} distancePx={40}>
              <p className="mt-6 text-lg text-white/90">
              Comprehensive energy infrastructure solutions built on reliability, safety, and operational excellence.
              </p>
            </ScrollReveal>
        </figure>
        </figure>
      </main>

      <ServiceBody/>
      <ScaleOperation/>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

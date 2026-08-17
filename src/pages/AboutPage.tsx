import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AboutPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function AboutPage({ currentPage, onNavigate }: AboutPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg-main text-text-main">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      
      <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            About Petra Midstream
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            This is the About Page. Petra Midstream is committed to engineering, constructing, and operating high-performance pipelines and logistics infrastructure.
          </p>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

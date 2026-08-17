import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PrivacyPolicyPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicyPage({ currentPage, onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="flex flex-col min-h-screen montserrat-font bg-bg-main text-text-main">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-slate max-w-none text-text-muted leading-relaxed space-y-6">
            <p>
              Last Updated: August 17, 2026
            </p>
            <p>
              At Petra Midstream, we are committed to protecting the privacy and security of your personal data. This Privacy Policy describes how we collect, use, and share information when you visit our website or interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you request a consultation, submit inquiry forms, or communicate with our support teams. This information may include your name, email address, phone number, and company name.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, respond to inquiries, send administrative communications, and fulfill legal compliance obligations.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-4">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard physical, technical, and administrative security measures designed to protect your information from unauthorized access, loss, or disclosure.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-4">
              4. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data management practices, please contact us at privacy@petramidstream.com.
            </p>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

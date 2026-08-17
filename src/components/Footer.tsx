interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <footer className="bg-primary-dark montserrat-font text-light py-16 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Brand Information */}
        <div className="flex flex-col space-y-4">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="text-xl font-bold tracking-wider text-white hover:text-accent transition-colors w-fit"
          >
            Petra Midstream
          </a>
          <p className="text-sm text-text-light/60">
            &copy; {currentYear} Petra Midstream. All rights reserved.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col space-y-4">
          <nav aria-label="Footer Quick Links" className="flex flex-col space-y-3">
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="text-sm text-text-light/80 hover:text-accent transition-colors w-fit"
            >
              About Us
            </a>
            <a
              href="/safety"
              onClick={(e) => handleLinkClick(e, 'about')} // Links to About
              className="text-sm text-text-light/80 hover:text-accent transition-colors w-fit"
            >
              Safety Standards
            </a>
            <a
              href="/services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="text-sm text-text-light/80 hover:text-accent transition-colors w-fit"
            >
              Midstream Services
            </a>
          </nav>
        </div>

        {/* Column 3: Utility & Compliance Links */}
        <div className="flex flex-col space-y-4">
          <nav aria-label="Footer Utility Links" className="flex flex-col space-y-3">
            <a
              href="/map"
              onClick={(e) => handleLinkClick(e, 'services')} // Links to Services
              className="text-sm text-text-light/80 hover:text-accent transition-colors w-fit"
            >
              Operational Map
            </a>
            <a
              href="/support"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="text-sm text-text-light/80 hover:text-accent transition-colors w-fit"
            >
              Contact Support
            </a>
            <a
              href="/privacy"
              onClick={(e) => handleLinkClick(e, 'privacy')}
              className="text-sm text-text-light/80 hover:text-accent transition-colors w-fit"
            >
              Privacy Policy
            </a>
          </nav>
        </div>

      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 montserrat-font z-40 transition-all duration-300 ${isScrolled || currentPage !== 'home'
          ? 'bg-primary/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="text-2xl font-bold text-white tracking-wider hover:opacity-90 transition-opacity"
        >
          Petra Midstream
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`relative py-1 text-sm font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform after:duration-300 ${currentPage === 'home'
                ? 'text-accent after:scale-x-100'
                : 'text-text-light/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100'
              }`}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`relative py-1 text-sm font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform after:duration-300 ${currentPage === 'about'
                ? 'text-accent after:scale-x-100'
                : 'text-text-light/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100'
              }`}
          >
            About
          </a>
          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className={`relative py-1 text-sm font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform after:duration-300 ${currentPage === 'services'
                ? 'text-accent after:scale-x-100'
                : 'text-text-light/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100'
              }`}
          >
            Services
          </a>
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`relative py-1 text-sm font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform after:duration-300 ${currentPage === 'contact'
                ? 'text-accent after:scale-x-100'
                : 'text-text-light/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100'
              }`}
          >
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-6 py-2.5 text-sm font-semibold border-2 border-accent text-accent rounded hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden text-white hover:text-accent focus:outline-none p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-primary-dark/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col px-6 py-8 space-y-6">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`text-base font-semibold transition-colors ${currentPage === 'home' ? 'text-accent' : 'text-text-light/80 hover:text-accent'
              }`}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`text-base font-medium transition-colors ${currentPage === 'about' ? 'text-accent' : 'text-text-light/80 hover:text-accent'
              }`}
          >
            About
          </a>
          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className={`text-base font-medium transition-colors ${currentPage === 'services' ? 'text-accent' : 'text-text-light/80 hover:text-accent'
              }`}
          >
            Services
          </a>
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`text-base font-medium transition-colors ${currentPage === 'contact' ? 'text-accent' : 'text-text-light/80 hover:text-accent'
              }`}
          >
            Contact
          </a>
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="inline-block text-center py-3 font-semibold border-2 border-accent text-accent rounded hover:bg-accent hover:text-white transition-all duration-300"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

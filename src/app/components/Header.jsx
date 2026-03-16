import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-b border-white/10"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className="flex flex-col"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <span
                className={`tracking-widest text-xs uppercase ${
                  transparent ? "text-[#B8963E]" : "text-[#B8963E]"
                }`}
                style={{ letterSpacing: "0.2em" }}
              >
                Urban Mind
              </span>
              <span
                className={`text-xl tracking-tight leading-none ${
                  transparent ? "text-white" : "text-[#0D0D0D]"
                }`}
              >
                Realty
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-gray-600 hover:text-[#0D0D0D]"
                } ${location.pathname === link.href ? (transparent ? "text-white" : "text-[#0D0D0D]") : ""}`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  } ${transparent ? "bg-[#B8963E]" : "bg-[#B8963E]"}`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911204567890"
              className={`flex items-center gap-2 text-sm transition-colors ${
                transparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-[#0D0D0D]"
              }`}
            >
              <Phone size={14} />
              +91 120 456 7890
            </a>
            <Link
              to="/contact"
              className="bg-[#B8963E] text-white px-5 py-2.5 text-sm tracking-wide hover:bg-[#9E7E2E] transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${transparent ? "text-white" : "text-[#0D0D0D]"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block text-base transition-colors ${
                location.pathname === link.href
                  ? "text-[#B8963E]"
                  : "text-gray-700 hover:text-[#B8963E]"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              className="block w-full bg-[#B8963E] text-white text-center px-5 py-3 text-sm tracking-wide hover:bg-[#9E7E2E] transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

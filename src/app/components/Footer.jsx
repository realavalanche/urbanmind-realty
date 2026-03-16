import { Link } from "react-router";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5" style={{ fontFamily: "var(--font-serif)" }}>
              <span
                className="block text-[#B8963E] text-xs tracking-widest uppercase mb-1"
                style={{ letterSpacing: "0.2em" }}
              >
                Urban Mind
              </span>
              <span className="text-2xl text-white">Realty</span>
            </div>
            <p
              className="text-gray-400 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Where Luxury Finds Its Address. Full-service real estate advisory for discerning buyers, sellers, and investors in the NCR region.
            </p>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xs text-gray-500 uppercase tracking-wider">RERA No:</span>
              <span className="text-xs text-gray-300 ml-2">UPRERAPRJ123456</span>
            </div>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#B8963E] hover:text-[#B8963E] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Listings", href: "/listings" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#B8963E] text-sm transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Buy Property",
                "Sell Property",
                "Rent / Lease",
                "Investment Advisory",
                "Home Loans",
                "Legal Advisory",
                "Property Valuation",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#B8963E] text-sm transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#B8963E] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Unit 4B, Tower Alpha, Sector 62, Noida, UP — 201309
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#B8963E] shrink-0 mt-0.5" />
                <a
                  href="tel:+911204567890"
                  className="text-gray-400 hover:text-[#B8963E] text-sm transition-colors"
                >
                  +91 120 456 7890
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#B8963E] shrink-0 mt-0.5" />
                <a
                  href="mailto:sales@urbanmindrealty.in"
                  className="text-gray-400 hover:text-[#B8963E] text-sm transition-colors"
                >
                  sales@urbanmindrealty.in
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={16} className="text-[#B8963E] shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#B8963E] text-sm transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs" style={{ fontFamily: "var(--font-sans)" }}>
            © {new Date().getFullYear()} Urban Mind Realty Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs" style={{ fontFamily: "var(--font-sans)" }}>
            RERA Registered · ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}

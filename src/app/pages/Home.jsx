import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Key,
  DollarSign,
  FileText,
  BarChart2,
  Star,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { motion } from "motion/react";
import { PropertyCard } from "../components/PropertyCard";
import { featuredProperties } from "../data/properties";

const HERO_BG = "https://images.unsplash.com/photo-1771998785227-268f33b50c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMEluZGlhJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzM5OTUxM3ww&ixlib=rb-4.1.0&q=80&w=1920";

const services = [
  { icon: ShoppingBag, label: "Buy" },
  { icon: TrendingUp, label: "Sell" },
  { icon: Key, label: "Rent" },
  { icon: DollarSign, label: "Invest" },
  { icon: FileText, label: "Legal" },
  { icon: BarChart2, label: "Valuation" },
];

const stats = [
  { value: "850+", label: "Properties Sold" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "12+", label: "Years of Experience" },
  { value: "8", label: "Cities Served" },
];

const testimonials = [
  {
    quote:
      "Urban Mind Realty helped us find our dream penthouse in just three weeks. Their knowledge of the Noida market and attention to detail is unparalleled. The entire process was seamless and professional.",
    name: "Arjun & Priya Mehta",
    title: "Purchased a 4 BHK Penthouse, Sector 150",
    image: "https://images.unsplash.com/photo-1744448365250-9b6aa1a7e4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb3VwbGUlMjBoYXBweSUyMGZhbWlseSUyMGx1eHVyeSUyMGhvbWV8ZW58MXx8fHwxNzczMzk5NTIyfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    quote:
      "As an NRI investor based in London, I needed an advisor I could trust completely. Urban Mind Realty not only found me the right investment property but also handled all the legal paperwork remotely. Exceptional service.",
    name: "Vikram Nair",
    title: "NRI Investor — Dubai",
    image: "https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc3VpdHxlbnwxfHx8fDE3NzMzMzg5Nzh8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    quote:
      "I was skeptical about selling my property in this market, but the Urban Mind team not only got me the best price — they did it in 18 days. Truly a cut above the rest.",
    name: "Sunita Kapoor",
    title: "Sold a 3 BHK in Sector 62, Noida",
    image: "https://images.unsplash.com/photo-1739286743411-faac93ee7789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMEluZGlhbiUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzczMzk5NTE4fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "").replace(/,/g, "");
  const count = useCountUp(numericValue, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-white mb-2"
        style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", lineHeight: 1.1 }}
      >
        {visible ? `${count.toLocaleString()}${suffix}` : "0"}
      </div>
      <div
        className="text-gray-400 text-sm uppercase tracking-widest"
        style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [locality, setLocality] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const navigate = useNavigate();

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    navigate(`/listings?type=${activeTab}&locality=${locality}&propertyType=${propertyType}`);
  };

  return (
    <div>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span
              className="inline-block text-[#B8963E] text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
            >
              Noida's Premier Luxury Real Estate
            </span>
            <h1
              className="text-white mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              Where Luxury
              <br />
              <em>Finds Its Address</em>
            </h1>
            <p
              className="text-white/70 max-w-xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem" }}
            >
              Curated luxury properties, investment advisory, and full-service real estate expertise for discerning buyers across NCR.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-white shadow-2xl overflow-hidden max-w-3xl mx-auto"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {(["Buy", "Rent", "Sell"]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-sm uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-[#0D0D0D] text-white"
                      : "text-gray-500 hover:text-[#0D0D0D] hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Fields */}
            <div className="flex flex-col sm:flex-row">
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="flex-1 px-5 py-4 text-sm text-gray-600 border-0 border-r border-gray-100 outline-none bg-white appearance-none cursor-pointer"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <option value="">Select Locality</option>
                <option>Sector 150, Noida</option>
                <option>Sector 137, Noida</option>
                <option>Sector 62, Noida</option>
                <option>Sector 128, Noida</option>
                <option>Sector 76, Noida</option>
                <option>Sector 44, Noida</option>
                <option>Greater Noida West</option>
                <option>Noida Extension</option>
              </select>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="flex-1 px-5 py-4 text-sm text-gray-600 border-0 border-r border-gray-100 outline-none bg-white appearance-none cursor-pointer"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Duplex</option>
                <option>Studio</option>
              </select>
              <button
                onClick={handleSearch}
                className="bg-[#B8963E] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#9E7E2E] transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
              >
                Search
              </button>
            </div>
          </motion.div>

          {/* Quick stats below hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-8 mt-10 flex-wrap"
          >
            {["850+ Properties", "12+ Years Trust", "NCR's #1 Luxury Agency"].map((s) => (
              <span
                key={s}
                className="text-white/60 text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.18em" }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-white/30" />
        </div>
      </section>

      {/* ==================== SERVICES STRIP ==================== */}
      <section className="py-16 bg-[#FAFAF8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
            >
              Full-Service
            </span>
            <h2
              className="text-[#0D0D0D] mt-2"
              style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
            >
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {services.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/services"
                className="group flex flex-col items-center gap-3 py-6 px-4 border border-gray-100 bg-white hover:border-[#B8963E] transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5F3EF] group-hover:bg-[#B8963E] transition-colors">
                  <Icon size={20} className="text-[#B8963E] group-hover:text-white transition-colors" />
                </div>
                <span
                  className="text-xs uppercase tracking-wider text-gray-600 group-hover:text-[#B8963E] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED LISTINGS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span
                className="text-[#B8963E] text-xs uppercase tracking-widest block mb-2"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
              >
                Handpicked Properties
              </span>
              <h2
                className="text-[#0D0D0D]"
                style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 400 }}
              >
                Featured Listings
              </h2>
            </div>
            <Link
              to="/listings"
              className="flex items-center gap-2 text-sm text-[#B8963E] hover:gap-3 transition-all border-b border-[#B8963E] pb-0.5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              View All Listings
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
            >
              Client Stories
            </span>
            <h2
              className="text-[#0D0D0D] mt-2"
              style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="relative min-h-[260px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i === testimonialIdx ? 1 : 0, y: i === testimonialIdx ? 0 : 10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute inset-0 ${i === testimonialIdx ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={14} fill="#B8963E" className="text-[#B8963E]" />
                    ))}
                  </div>
                  <blockquote
                    className="text-[#333] max-w-2xl mx-auto mb-8 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      lineHeight: 1.75,
                    }}
                  >
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 object-cover rounded-full grayscale"
                    />
                    <div className="text-left">
                      <div
                        className="text-[#0D0D0D] text-sm"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-gray-500 text-xs"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {t.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#B8963E] hover:text-[#B8963E] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`h-1 transition-all ${i === testimonialIdx ? "w-8 bg-[#B8963E]" : "w-4 bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#B8963E] hover:text-[#B8963E] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #1A1410 50%, #0D0D0D 100%)",
        }}
      >
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E] to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span
            className="text-[#B8963E] text-xs uppercase tracking-widest block mb-4"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
          >
            Begin Your Journey
          </span>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            Ready to Find Your{" "}
            <em className="text-[#B8963E]">Perfect Address?</em>
          </h2>
          <p
            className="text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
          >
            Book a complimentary 30-minute consultation with our luxury real estate advisors. No pressure — just expert guidance tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#B8963E] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#9E7E2E] transition-colors"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
            >
              Book Free Consultation
            </Link>
            <Link
              to="/listings"
              className="border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-widest hover:border-white/60 transition-colors"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
            >
              Explore Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
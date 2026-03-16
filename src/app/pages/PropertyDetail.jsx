import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  MapPin,
  BedDouble,
  Maximize2,
  Building,
  Calendar,
  Hash,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { properties } from "../data/properties";
import { PropertyCard } from "../components/PropertyCard";

const amenityIcons = {
  "Private Terrace": "🏙️",
  "Rooftop Pool": "🏊",
  Concierge: "🛎️",
  "Smart Home": "📱",
  "3 Car Parking": "🚗",
  "Club Access": "🏛️",
  "24/7 Security": "🔒",
  "Gym & Spa": "💪",
  "Swimming Pool": "🏊",
  Gymnasium: "🏋️",
  Clubhouse: "🏛️",
  "Children Play Area": "🛝",
  "Jogging Track": "🏃",
  "2 Car Parking": "🚗",
  "Power Backup": "⚡",
  CCTV: "📷",
  "Landscaped Garden": "🌿",
  "Home Theatre": "🎬",
  "Servant Quarter": "🏠",
  "4 Car Garage": "🏎️",
  "Solar Power": "☀️",
  "Private Pool": "🏊",
  "Fully Furnished": "🛋️",
  "Rooftop Lounge": "🌆",
  "Co-working Space": "💻",
  "1 Car Parking": "🚗",
  "2 Car Parking ": "🚗",
};

function EMICalculator({ propertyPrice }) {
  const [loanAmount, setLoanAmount] = useState(Math.round(propertyPrice * 0.8));
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emi = (() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return P / n;
    return Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  })();

  const totalPayable = emi * tenure * 12;
  const totalInterest = totalPayable - loanAmount;

  return (
    <div className="bg-[#F5F3EF] p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator size={20} className="text-[#B8963E]" />
        <h3
          className="text-[#0D0D0D]"
          style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400 }}
        >
          EMI Calculator
        </h3>
      </div>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-2">
            <label
              className="text-xs uppercase tracking-wide text-gray-500"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
            >
              Loan Amount
            </label>
            <span
              className="text-sm text-[#0D0D0D] font-medium"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              ₹{(loanAmount / 100000).toFixed(1)} L
            </span>
          </div>
          <input
            type="range"
            min={500000}
            max={Math.max(propertyPrice, 50000000)}
            step={500000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-[#B8963E]"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label
              className="text-xs uppercase tracking-wide text-gray-500"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
            >
              Interest Rate
            </label>
            <span
              className="text-sm text-[#0D0D0D] font-medium"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {interestRate}% p.a.
            </span>
          </div>
          <input
            type="range"
            min={6}
            max={15}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-[#B8963E]"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label
              className="text-xs uppercase tracking-wide text-gray-500"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
            >
              Tenure
            </label>
            <span
              className="text-sm text-[#0D0D0D] font-medium"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {tenure} years
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-[#B8963E]"
          />
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div
              className="text-[#B8963E] mb-1"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem" }}
            >
              ₹{emi.toLocaleString()}
            </div>
            <div
              className="text-gray-500 text-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Monthly EMI
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-[#0D0D0D] mb-1"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
            >
              ₹{(totalInterest / 100000).toFixed(1)}L
            </div>
            <div
              className="text-gray-500 text-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Total Interest
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-[#0D0D0D] mb-1"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
            >
              ₹{(totalPayable / 100000).toFixed(1)}L
            </div>
            <div
              className="text-gray-500 text-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Total Payable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const similar = properties.filter((p) => p.id !== id && p.type === property?.type).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF8] pt-20">
        <h1
          className="text-[#0D0D0D] mb-4"
          style={{ fontFamily: "var(--font-serif)", fontSize: "2rem" }}
        >
          Property Not Found
        </h1>
        <Link
          to="/listings"
          className="text-[#B8963E] text-sm border-b border-[#B8963E]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Browse All Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Photo Gallery */}
      <div className="relative bg-[#0D0D0D] h-72 md:h-[65vh] overflow-hidden group">
        <img
          src={property.images[activeImg] || property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Nav arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImg((i) => (i - 1 + property.images.length) % property.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActiveImg((i) => (i + 1) % property.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1 transition-all ${i === activeImg ? "w-8 bg-[#B8963E]" : "w-4 bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Thumbnail strip */}
        {property.images.length > 1 && (
          <div className="absolute bottom-8 right-6 flex gap-2">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-14 h-10 overflow-hidden border-2 transition-all ${
                  i === activeImg ? "border-[#B8963E]" : "border-white/40"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content + Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span
                  className={`text-xs px-3 py-1 uppercase tracking-wider ${
                    property.status === "Ready to Move"
                      ? "bg-[#0D0D0D] text-white"
                      : property.status === "New Launch"
                      ? "bg-[#B8963E] text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                >
                  {property.status}
                </span>
                <span
                  className="text-xs px-3 py-1 border border-gray-200 text-gray-500 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {property.type}
                </span>
              </div>
              <h1
                className="text-[#0D0D0D] mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 400,
                }}
              >
                {property.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-[#B8963E]" />
                <span
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {property.locality}
                </span>
              </div>
              <div
                className="text-[#B8963E]"
                style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
              >
                {property.price}
              </div>
            </div>

            {/* Key Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
              {[
                { icon: BedDouble, label: "Configuration", value: `${property.bhk} BHK` },
                { icon: Maximize2, label: "Carpet Area", value: `${property.area.toLocaleString()} sqft` },
                { icon: Building, label: "Floor", value: property.floor },
                { icon: Calendar, label: "Possession", value: property.possession },
                { icon: Hash, label: "RERA No.", value: property.rera },
                { icon: MapPin, label: "Locality", value: property.locality.split(",")[0] },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#F5F3EF] p-4 flex items-start gap-3"
                >
                  <Icon size={16} className="text-[#B8963E] mt-0.5 shrink-0" />
                  <div>
                    <div
                      className="text-gray-400 text-xs uppercase tracking-wide mb-1"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-[#0D0D0D] text-sm"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2
                className="text-[#0D0D0D] mb-4"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400 }}
              >
                About This Property
              </h2>
              <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8 }}
              >
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-10">
              <h2
                className="text-[#0D0D0D] mb-6"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400 }}
              >
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 p-3 border border-gray-100"
                  >
                    <span className="text-lg">{amenityIcons[amenity] || "✓"}</span>
                    <span
                      className="text-sm text-gray-600"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* EMI Calculator */}
            {property.listingType === "Buy" && (
              <div className="mb-10">
                <EMICalculator propertyPrice={property.priceValue} />
              </div>
            )}
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-24 bg-white border border-gray-100 shadow-sm p-7">
              <div
                className="text-[#B8963E] mb-1"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400 }}
              >
                {property.price}
              </div>
              <div
                className="text-gray-400 text-xs mb-6 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
              >
                {property.bhk} BHK · {property.area.toLocaleString()} sqft · {property.locality.split(",")[0]}
              </div>

              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#B8963E] transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#B8963E] transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  className="w-full bg-[#B8963E] text-white py-3.5 text-sm uppercase tracking-widest hover:bg-[#9E7E2E] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
                >
                  <Phone size={14} className="inline mr-2" />
                  Book Site Visit
                </button>
                <a
                  href={`https://wa.me/919876543210?text=I'm interested in ${encodeURIComponent(property.title)} at ${property.locality}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3.5 text-sm uppercase tracking-widest hover:bg-[#1EB257] transition-colors text-center flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+911204567890"
                  className="w-full border border-[#0D0D0D] text-[#0D0D0D] py-3.5 text-sm uppercase tracking-widest hover:bg-[#0D0D0D] hover:text-white transition-colors text-center"
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
                >
                  Call Agent
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-[#B8963E] mt-0.5 shrink-0" />
                  <p
                    className="text-gray-400 text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    RERA Registered property. All transactions are legally compliant and documented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      {similar.length > 0 && (
        <section className="py-16 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-end justify-between mb-8">
              <h2
                className="text-[#0D0D0D]"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400 }}
              >
                Similar Properties
              </h2>
              <Link
                to="/listings"
                className="flex items-center gap-2 text-sm text-[#B8963E] border-b border-[#B8963E] pb-0.5"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                View All <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

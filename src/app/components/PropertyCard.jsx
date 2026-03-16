import { Link } from "react-router";
import { MapPin, Maximize2, BedDouble } from "lucide-react";

export function PropertyCard({ property, size = "default" }) {
  return (
    <Link to={`/property/${property.id}`} className="group block">
      <div className="overflow-hidden bg-white">
        {/* Image */}
        <div
          className={`relative overflow-hidden ${size === "large" ? "h-72 lg:h-80" : "h-56 lg:h-64"}`}
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs px-3 py-1 uppercase tracking-wider font-medium ${
                property.status === "Ready to Move"
                  ? "bg-[#0D0D0D] text-white"
                  : property.status === "New Launch"
                  ? "bg-[#B8963E] text-white"
                  : "bg-white text-[#0D0D0D]"
              }`}
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.08em" }}
            >
              {property.status}
            </span>
          </div>
          {/* Type */}
          <div className="absolute top-4 right-4">
            <span
              className="text-xs px-2.5 py-1 bg-white/90 text-[#0D0D0D] uppercase tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {property.type}
            </span>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span
              className="bg-[#B8963E] text-white px-6 py-2.5 text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 border border-t-0 border-gray-100">
          <p
            className="text-[#B8963E] text-xs uppercase tracking-widest mb-1.5"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
          >
            {property.listingType}
          </p>
          <h3
            className="text-[#0D0D0D] mb-3 leading-snug pr-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: size === "large" ? "1.2rem" : "1rem",
            }}
          >
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={12} className="text-gray-400" />
            <span
              className="text-gray-500 text-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {property.locality}
            </span>
          </div>

          <div
            className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="flex items-center gap-1.5">
              <BedDouble size={13} className="text-gray-400" />
              {property.bhk} BHK
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize2 size={12} className="text-gray-400" />
              {property.area.toLocaleString()} sqft
            </span>
            <span className="text-gray-300">|</span>
            <span>{property.floor}</span>
          </div>

          <div
            className="text-[#0D0D0D] font-semibold"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
          >
            {property.price}
          </div>
        </div>
      </div>
    </Link>
  );
}

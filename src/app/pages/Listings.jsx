import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../data/properties";

const localities = [
  "All Localities",
  "Sector 150, Noida",
  "Sector 137, Noida",
  "Sector 62, Noida",
  "Sector 128, Noida",
  "Sector 76, Noida",
  "Sector 44, Noida",
];

const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₹1 Cr", min: 0, max: 10000000 },
  { label: "₹1 Cr – ₹3 Cr", min: 10000000, max: 30000000 },
  { label: "₹3 Cr – ₹8 Cr", min: 30000000, max: 80000000 },
  { label: "₹8 Cr+", min: 80000000, max: Infinity },
  { label: "Up to ₹1 L/mo (Rent)", min: 0, max: 100000 },
];

export default function Listings() {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    listingType: searchParams.get("type") || "All",
    propertyType: searchParams.get("propertyType") || "All",
    bhk: "All",
    locality: searchParams.get("locality") || "All Localities",
    priceRange: 0,
    status: "All",
  });

  const setFilter = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
  };

  const filtered = properties.filter((p) => {
    if (filters.listingType !== "All" && p.listingType !== filters.listingType) return false;
    if (filters.propertyType !== "All" && p.type !== filters.propertyType) return false;
    if (filters.bhk !== "All" && p.bhk !== parseInt(filters.bhk)) return false;
    if (
      filters.locality !== "All Localities" &&
      filters.locality !== "" &&
      p.locality !== filters.locality
    )
      return false;
    if (filters.status !== "All" && p.status !== filters.status) return false;
    const range = priceRanges[filters.priceRange];
    if (range && (p.priceValue < range.min || p.priceValue > range.max)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-20">
      {/* Page Header */}
      <div className="bg-[#0D0D0D] py-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span
            className="text-[#B8963E] text-xs uppercase tracking-widest block mb-2"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
          >
            Explore Properties
          </span>
          <h1
            className="text-white"
            style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 400 }}
          >
            Property Listings
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside
            className={`lg:w-64 shrink-0 ${filterOpen ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white border border-gray-100 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs uppercase tracking-widest text-[#0D0D0D]"
                  style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.18em" }}
                >
                  Filters
                </span>
                <button
                  onClick={() =>
                    setFilters({
                      listingType: "All",
                      propertyType: "All",
                      bhk: "All",
                      locality: "All Localities",
                      priceRange: 0,
                      status: "All",
                    })
                  }
                  className="text-xs text-[#B8963E] hover:underline"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Clear All
                </button>
              </div>

              {/* Listing Type */}
              <FilterSection title="Listing Type">
                <div className="flex flex-wrap gap-2">
                  {["All", "Buy", "Rent"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setFilter("listingType", t)}
                      className={`px-3 py-1.5 text-xs border transition-colors ${
                        filters.listingType === t
                          ? "bg-[#B8963E] border-[#B8963E] text-white"
                          : "border-gray-200 text-gray-600 hover:border-[#B8963E] hover:text-[#B8963E]"
                      }`}
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </FilterSection>

              {/* Property Type */}
              <FilterSection title="Property Type">
                <div className="space-y-2">
                  {["All", "Apartment", "Villa", "Penthouse", "Duplex", "Studio"].map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="propType"
                        checked={filters.propertyType === t}
                        onChange={() => setFilter("propertyType", t)}
                        className="accent-[#B8963E]"
                      />
                      <span
                        className="text-sm text-gray-600 group-hover:text-[#B8963E] transition-colors"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* BHK */}
              <FilterSection title="BHK">
                <div className="flex flex-wrap gap-2">
                  {['All', '1', '2', '3', '4', '5'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setFilter('bhk', b)}
                      className={`w-10 h-10 text-xs border transition-colors ${
                        filters.bhk === b
                          ? 'bg-[#B8963E] border-[#B8963E] text-white'
                          : 'border-gray-200 text-gray-600 hover:border-[#B8963E] hover:text-[#B8963E]'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {b === 'All' ? 'Any' : b}
                    </button>
                  ))}
                </div>
              </FilterSection>

              {/* Price Range */}
              <FilterSection title="Price Range">
                <div className="space-y-2">
                  {priceRanges.map((r, i) => (
                    <label
                      key={r.label}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === i}
                        onChange={() => setFilter("priceRange", i)}
                        className="accent-[#B8963E]"
                      />
                      <span
                        className="text-sm text-gray-600 group-hover:text-[#B8963E] transition-colors"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {r.label}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Locality */}
              <FilterSection title="Locality">
                <div className="space-y-2">
                  {localities.map((l) => (
                    <label
                      key={l}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="locality"
                        checked={filters.locality === l}
                        onChange={() => setFilter("locality", l)}
                        className="accent-[#B8963E]"
                      />
                      <span
                        className="text-sm text-gray-600 group-hover:text-[#B8963E] transition-colors"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {l}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Possession Status */}
              <FilterSection title="Possession">
                <div className="space-y-2">
                  {["All", "Ready to Move", "Under Construction", "New Launch"].map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="status"
                        checked={filters.status === s}
                        onChange={() => setFilter("status", s)}
                        className="accent-[#B8963E]"
                      />
                      <span
                        className="text-sm text-gray-600 group-hover:text-[#B8963E] transition-colors"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 border border-gray-200 px-4 py-2.5 text-sm text-gray-600"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {filterOpen ? <X size={16} /> : <SlidersHorizontal size={16} />}
                {filterOpen ? "Close Filters" : "Filters"}
              </button>
              <span
                className="text-sm text-gray-500"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {filtered.length} propert{filtered.length === 1 ? "y" : "ies"} found
              </span>
            </div>

            {/* Desktop count */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <span
                className="text-sm text-gray-500"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {filtered.length} propert{filtered.length === 1 ? "y" : "ies"} found
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p
                  className="text-gray-400 text-lg mb-2"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  No properties match your filters.
                </p>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Try adjusting your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((property, i) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-4"
      >
        <span
          className="text-xs uppercase tracking-wider text-gray-500"
          style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
        >
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && children}
    </div>
  );
}

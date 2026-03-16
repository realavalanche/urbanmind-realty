import { Link } from "react-router";
import {
  ShoppingBag,
  TrendingUp,
  Key,
  DollarSign,
  FileText,
  BarChart2,
  Home,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const HERO_BG =
  "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjByZWFsJTIwZXN0YXRlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM5OTUyM3ww&ixlib=rb-4.1.0&q=80&w=1920";

const services = [
  {
    icon: ShoppingBag,
    title: "Buy Property",
    description:
      "We match you with properties that align with your lifestyle, budget, and aspirations — from luxurious penthouses to investment-grade apartments across Noida and NCR.",
    points: [
      "Curated property shortlisting",
      "Site visit coordination",
      "Price negotiation & due diligence",
      "Post-purchase handover support",
    ],
    cta: "Start Your Search",
    href: "/listings",
  },
  {
    icon: TrendingUp,
    title: "Sell Property",
    description:
      "Sell your property at the best price, with the right buyers, in the shortest time. Our expert marketing and wide network ensures maximum visibility for your listing.",
    points: [
      "Professional property photography",
      "Premium listing placement",
      "Targeted buyer outreach",
      "Negotiation & closure support",
    ],
    cta: "List Your Property",
    href: "/contact",
  },
  {
    icon: Key,
    title: "Rent & Lease",
    description:
      "Whether you're looking for a luxury apartment or a managed commercial space, we facilitate seamless rental agreements that protect both tenant and landlord interests.",
    points: [
      "Tenant verification & screening",
      "Lease documentation",
      "Rental pricing advisory",
      "Move-in / move-out support",
    ],
    cta: "Find Rental Properties",
    href: "/listings",
  },
  {
    icon: Home,
    title: "Property Management",
    description:
      "For NRI investors and busy professionals, we offer end-to-end property management — ensuring your asset is maintained, rented, and income-generating at all times.",
    points: [
      "Tenant management",
      "Maintenance coordination",
      "Monthly rent collection",
      "Annual property audit",
    ],
    cta: "Enquire Now",
    href: "/contact",
  },
  {
    icon: DollarSign,
    title: "Home Loans",
    description:
      "Navigating home financing is complex. We partner with India's leading banks and NBFCs to secure the best loan terms for your profile and property.",
    points: [
      "Loan eligibility assessment",
      "Bank & NBFC comparisons",
      "Documentation assistance",
      "Loan disbursement follow-up",
    ],
    cta: "Check Eligibility",
    href: "/contact",
  },
  {
    icon: FileText,
    title: "Legal Advisory",
    description:
      "Our empanelled legal team ensures every transaction is airtight — from title verification and RERA compliance to sale deed registration and stamp duty optimization.",
    points: [
      "Title search & verification",
      "Sale agreement drafting",
      "RERA compliance checks",
      "Registration support",
    ],
    cta: "Talk to a Lawyer",
    href: "/contact",
  },
  {
    icon: BarChart2,
    title: "Property Valuation",
    description:
      "Get an accurate, market-aligned valuation of your property backed by recent transaction data, location analysis, and expert assessment — for selling, buying, or refinancing.",
    points: [
      "Market-based valuation report",
      "Comparative market analysis",
      "Investment yield projections",
      "Certified valuation certificate",
    ],
    cta: "Request Valuation",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
            >
              What We Do
            </span>
            <h1
              className="text-white"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {services.map(({ icon: Icon, title, description, points, cta, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white p-10 group hover:bg-[#FAFAF8] transition-colors"
              >
                <div className="w-14 h-14 bg-[#F5F3EF] flex items-center justify-center mb-6 group-hover:bg-[#B8963E] transition-colors">
                  <Icon size={22} className="text-[#B8963E] group-hover:text-white transition-colors" />
                </div>
                <h3
                  className="text-[#0D0D0D] mb-3"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400 }}
                >
                  {title}
                </h3>
                <p
                  className="text-gray-500 mb-6 leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {description}
                </p>
                <ul className="space-y-2 mb-8">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#B8963E] mt-1.5 shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={href}
                  className="inline-flex items-center gap-2 text-sm text-[#B8963E] border-b border-[#B8963E] pb-0.5 hover:gap-3 transition-all"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {cta}
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span
            className="text-[#B8963E] text-xs uppercase tracking-widest block mb-4"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
          >
            Get Started
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p
            className="text-gray-400 mb-8 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our advisors are happy to guide you. Book a free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#B8963E] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#9E7E2E] transition-colors"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

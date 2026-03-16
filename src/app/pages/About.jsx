import { Link } from "react-router";
import { Award, Users, Shield, TrendingUp, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const HERO_BG =
  "https://images.unsplash.com/photo-1758194090785-8e09b7288199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGxvYmJ5JTIwZW50cmFuY2UlMjBtYXJibGV8ZW58MXx8fHwxNzczMzk5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1920";

const team = [
  {
    name: "Rohit Malhotra",
    designation: "Founder & CEO",
    experience: "18 Years",
    image:
      "https://images.unsplash.com/photo-1771244678811-50c22f17c791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWwlMjBJbmRpYW4lMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NzMzOTk1MTd8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    name: "Priya Srivastava",
    designation: "Head of Luxury Sales",
    experience: "12 Years",
    image:
      "https://images.unsplash.com/photo-1739286743411-faac93ee7789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMEluZGlhbiUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzczMzk5NTE4fDA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    name: "Sanjay Khanna",
    designation: "Senior Investment Advisor",
    experience: "10 Years",
    image:
      "https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc3VpdHxlbnwxfHx8fDE3NzMzMzg5Nzh8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    name: "Neha Agarwal",
    designation: "Head of Legal Advisory",
    experience: "9 Years",
    image:
      "https://images.unsplash.com/photo-1744448365250-9b6aa1a7e4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb3VwbGUlMjBoYXBweSUyMGZhbWlseSUyMGx1eHVyeSUyMGhvbWV8ZW58MXx8fHwxNzczMzk5NTIyfDA&ixlib=rb-4.1.0&q=80&w=600",
  },
];

const awards = [
  { year: "2024", title: "Best Luxury Real Estate Agency", body: "NCR Realty Awards" },
  { year: "2023", title: "Top 10 Agents in Noida", body: "Housing Excellence Awards" },
  { year: "2022", title: "Customer Satisfaction Award", body: "PropTech India" },
  { year: "2021", title: "RERA Compliance Champion", body: "UP RERA Board" },
];

const reviews = [
  {
    name: "Rajesh Gupta",
    rating: 5,
    text: "Absolutely phenomenal service. The team at Urban Mind helped us purchase a 4 BHK in Sector 150 at a price that beat every other agent we consulted.",
  },
  {
    name: "Anita Verma",
    rating: 5,
    text: "As an NRI, I was worried about managing the property purchase remotely. Urban Mind Realty made the entire process transparent and stress-free.",
  },
  {
    name: "Sunil Sharma",
    rating: 5,
    text: "Sold my Sector 62 apartment 23 days after listing. The marketing materials were stunning and the team's follow-up was impeccable.",
  },
];

const values = [
  { icon: Shield, title: "Integrity First", desc: "We operate with complete transparency. No hidden charges, no misleading pitches." },
  { icon: Award, title: "Excellence in Every Deal", desc: "Luxury isn't just what we sell — it's the standard we hold ourselves to." },
  { icon: Users, title: "Client-Centric", desc: "Your goals are our mission. We listen before we advise." },
  { icon: TrendingUp, title: "Market Mastery", desc: "12+ years of NCR data gives us an edge no algorithm can replicate." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="About" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
            >
              Our Story
            </span>
            <h1
              className="text-white max-w-xl"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Redefining Luxury Real Estate in NCR
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#B8963E] text-xs uppercase tracking-widest block mb-4"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
              >
                Founded 2012
              </span>
              <h2
                className="text-[#0D0D0D] mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Built on Trust,<br />
                <em>Driven by Excellence</em>
              </h2>
              <div
                className="space-y-4 text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8 }}
              >
                <p>
                  Urban Mind Realty was born from a simple belief: buying or selling a luxury property should be as refined an experience as owning one. Founded in 2012 by Rohit Malhotra — a veteran of the NCR property market — we started as a boutique advisory firm serving HNI clients in Noida's emerging luxury corridors.
                </p>
                <p>
                  Over 12 years, we've grown into a full-service real estate company with a team of 40+ professionals, managing over ₹2,500 Crores in transactions. Our client base spans across Noida, Greater Noida, Gurgaon, and extends to NRI investors in Dubai, UK, USA, and Singapore.
                </p>
                <p>
                  What sets us apart isn't just our network or our data — it's our philosophy. We don't just sell properties; we connect people with addresses that define their lives.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100"
            >
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white p-8">
                  <div className="w-10 h-10 bg-[#F5F3EF] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#B8963E]" />
                  </div>
                  <h4
                    className="text-[#0D0D0D] mb-2"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400 }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-gray-400 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
            >
              Meet the Experts
            </span>
            <h2
              className="text-[#0D0D0D]"
              style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
            >
              Our Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#B8963E] text-white px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    {member.experience}
                  </div>
                </div>
                <h3
                  className="text-[#0D0D0D] mb-1"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 400 }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {member.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
            >
              Recognition
            </span>
            <h2
              className="text-white"
              style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
            >
              Awards & Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0D0D0D] p-8 text-center"
              >
                <Award size={28} className="text-[#B8963E] mx-auto mb-4" />
                <div
                  className="text-[#B8963E] text-xs mb-3"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {award.year}
                </div>
                <h4
                  className="text-white mb-2"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 400 }}
                >
                  {award.title}
                </h4>
                <p
                  className="text-gray-500 text-xs"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {award.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span
              className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
            >
              Google Reviews
            </span>
            <h2
              className="text-[#0D0D0D]"
              style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400 }}
            >
              Rated 4.9 / 5 by 300+ Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, si) => (
                    <Star key={si} size={14} fill="#B8963E" className="text-[#B8963E]" />
                  ))}
                </div>
                <blockquote
                  className="text-gray-600 mb-6 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  "{review.text}"
                </blockquote>
                <div
                  className="text-[#0D0D0D] text-sm"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                >
                  {review.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-[#0D0D0D] mb-4"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400 }}
          >
            Ready to Work With Us?
          </h2>
          <p
            className="text-gray-500 text-sm mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Whether you're buying, selling, or investing — our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#B8963E] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#9E7E2E] transition-colors"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}

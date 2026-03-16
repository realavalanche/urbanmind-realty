import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const HERO_BG =
  "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjByZWFsJTIwZXN0YXRlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM5OTUyM3ww&ixlib=rb-4.1.0&q=80&w=1920";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
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
              Reach Us
            </span>
            <h1
              className="text-white"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
              >
                Send a Message
              </span>
              <h2
                className="text-[#0D0D0D] mb-8"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400 }}
              >
                Book a Free Consultation
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F5F3EF] p-10 text-center"
                >
                  <CheckCircle2 size={40} className="text-[#B8963E] mx-auto mb-4" />
                  <h3
                    className="text-[#0D0D0D] mb-2"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400 }}
                  >
                    Message Received
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Our team will reach out to you within 2 business hours. For immediate assistance, WhatsApp us directly.
                  </p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-white px-6 py-3 text-sm"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Now
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wide text-gray-500 mb-2"
                        style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#B8963E] transition-colors bg-white"
                        style={{ fontFamily: "var(--font-sans)" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wide text-gray-500 mb-2"
                        style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#B8963E] transition-colors bg-white"
                        style={{ fontFamily: "var(--font-sans)" }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wide text-gray-500 mb-2"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#B8963E] transition-colors bg-white"
                      style={{ fontFamily: "var(--font-sans)" }}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wide text-gray-500 mb-2"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                    >
                      Enquiry Type *
                    </label>
                    <select
                      name="enquiryType"
                      required
                      value={form.enquiryType}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#B8963E] transition-colors bg-white appearance-none cursor-pointer"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <option value="">Select enquiry type</option>
                      <option>Buy Property</option>
                      <option>Sell Property</option>
                      <option>Rent / Lease</option>
                      <option>Investment Advisory</option>
                      <option>Property Valuation</option>
                      <option>Legal Advisory</option>
                      <option>Home Loan</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wide text-gray-500 mb-2"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#B8963E] transition-colors bg-white resize-none"
                      style={{ fontFamily: "var(--font-sans)" }}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-[#B8963E] text-white py-4 text-sm uppercase tracking-widest hover:bg-[#9E7E2E] transition-colors flex items-center justify-center gap-2"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
                    >
                      <Send size={14} />
                      Send Message
                    </button>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20Urban%20Mind%20Realty%2C%20I%20have%20an%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] text-white py-4 text-sm uppercase tracking-widest hover:bg-[#1EB257] transition-colors flex items-center justify-center gap-2"
                      style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
                    >
                      <MessageCircle size={14} />
                      WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#B8963E] text-xs uppercase tracking-widest block mb-3"
                style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.2em" }}
              >
                Office Details
              </span>
              <h2
                className="text-[#0D0D0D] mb-8"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400 }}
              >
                Find Us
              </h2>

              {/* Contact info cards */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    title: "Office Address",
                    lines: [
                      "Unit 4B, Tower Alpha, Sector 62",
                      "Noida, Uttar Pradesh — 201309",
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+91 120 456 7890", "+91 98765 43210"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["sales@urbanmindrealty.com"],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: ["Mon–Sat: 10:00 AM – 7:00 PM", "Sunday: By Appointment"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-5 border border-gray-100 bg-[#FAFAF8]"
                  >
                    <div className="w-10 h-10 bg-[#F5F3EF] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#B8963E]" />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-wide text-gray-400 mb-1.5"
                        style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
                      >
                        {title}
                      </div>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-[#0D0D0D]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-64 overflow-hidden border border-gray-100">
                <iframe
                  title="Urban Mind Realty Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1784484688154!2d77.37157!3d28.6277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

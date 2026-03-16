import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Urban%20Mind%20Realty%2C%20I%20would%20like%20to%20enquire%20about%20a%20property."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-xl hover:shadow-2xl hover:bg-[#1EB257] transition-all duration-300 group"
      style={{ borderRadius: "2px" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} fill="white" />
      <span
        className="text-sm hidden sm:block"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Chat with Us
      </span>
    </a>
  );
}

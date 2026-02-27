import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-gradient-lilac relative z-45 min-h-[60vh] flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] 
                       rounded-full bg-white/10 blur-[120px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="container-narrow text-center relative z-10 max-w-3xl mx-auto"
    >
      <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-white leading-[1.1] mb-10 font-medium">
        Begin Your <span className="italic text-white/90 underline decoration-white/20 underline-offset-8">Wellness</span> Journey
      </h2>
      <p className="font-body text-[16px] md:text-lg text-white/70 max-w-xl mx-auto mb-14 leading-[1.9] font-light">
        Ready to transform your health and well-being? Connect with us today and take the first step towards a healthier, happier you.
      </p>
      <a
        href="https://wa.me/919893233681?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-primary px-10 py-5 rounded-full 
                   font-body text-sm font-semibold tracking-widest uppercase
                   hover:shadow-2xl hover:scale-[1.05] active:scale-[0.98]
                   transition-all duration-700 shadow-xl shadow-black/5"
      >
        Connect on WhatsApp
        <span className="ml-3 text-lg">→</span>
      </a>
    </motion.div>
  </section>
);

export default CTASection;

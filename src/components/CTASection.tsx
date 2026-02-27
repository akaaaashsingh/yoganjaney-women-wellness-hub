import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-gradient-olive relative overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] 
                       rounded-full bg-primary-foreground/5 blur-3xl" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="container-narrow text-center relative z-10 max-w-2xl mx-auto"
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
        Begin Your Wellness Journey
      </h2>
      <p className="font-body text-[15px] text-primary-foreground/70 max-w-md mx-auto mb-12 leading-[1.9] font-light">
        Ready to transform your health and well-being? Connect with us today and take the first step towards a healthier, happier you.
      </p>
      <a
        href="https://wa.me/919893233681?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-background text-foreground px-8 py-4 rounded-full 
                   font-body text-sm font-medium tracking-wide 
                   hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]
                   transition-all duration-500"
      >
        Connect on WhatsApp
        <span className="ml-2">→</span>
      </a>
    </motion.div>
  </section>
);

export default CTASection;

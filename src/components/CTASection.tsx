import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-gradient-gold relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary-foreground/20" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="container-narrow text-center relative z-10"
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
        Begin Your Wellness Journey
      </h2>
      <p className="font-body text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto mb-8">
        Ready to transform your health and well-being? Connect with us today and take the first step towards a healthier, happier you.
      </p>
      <a
        href="https://wa.me/919893233681?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-background text-primary px-8 py-3.5 rounded-lg font-body text-base font-semibold hover:bg-cream transition-colors"
      >
        Connect on WhatsApp
      </a>
    </motion.div>
  </section>
);

export default CTASection;

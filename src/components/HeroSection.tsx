import { motion } from "framer-motion";
import heroImg from "@/assets/hero-yoga.png";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden pt-20"
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
    </div>

    {/* Decorative elements */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-primary/10 pointer-events-none" />
    <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-primary/10 pointer-events-none" />

    <div className="container-narrow relative z-10 px-4 md:px-8 py-12">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary mb-5"
        >
          ✦ Nurture Yourself ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6"
        >
          Discover the{" "}
          <span className="text-gradient-olive italic">Healing Power</span>{" "}
          of Yoga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
        >
          Specialised women's wellness yoga in Raipur — pregnancy care, hormonal health, and holistic healing guided by Jisha Verma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/919893233681?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-olive text-primary-foreground px-8 py-4 rounded-full font-body text-sm font-medium tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center"
          >
            Start Your Journey →
          </a>
          <a
            href="#about"
            className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-body text-sm font-medium tracking-wide hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 text-center"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

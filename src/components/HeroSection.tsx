import { motion } from "framer-motion";
import heroImg from "@/assets/hero-yoga.png";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20"
  >
    {/* Decorative circle */}
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold-light/20 blur-3xl pointer-events-none" />

    <div className="container-narrow grid md:grid-cols-2 gap-10 items-center px-4 md:px-8 py-12">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
          !! Nurture Yourself !!
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
          Discover the <span className="text-gradient-gold">Healing Power</span> of Yoga
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-8 mx-auto md:mx-0">
          Specialised women's wellness yoga in Raipur — pregnancy care, hormonal health, and holistic healing guided by Jisha Verma.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://wa.me/919893233681?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-body text-base hover:opacity-90 transition-opacity text-center"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="border border-primary text-primary px-8 py-3.5 rounded-lg font-body text-base hover:bg-primary/5 transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl -rotate-3" />
          <img
            src={heroImg}
            alt="Woman practicing yoga in a peaceful garden"
            className="relative rounded-[2rem] w-full h-auto object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

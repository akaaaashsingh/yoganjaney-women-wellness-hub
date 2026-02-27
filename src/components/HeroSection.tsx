import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-yoga.png";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={heroImg}
          alt=""
          className="w-full h-[120%] object-cover"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="container-narrow relative z-10 px-6 md:px-8 pt-28 pb-16"
      >
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/80 mb-6"
          >
            Women's Wellness Yoga · Raipur
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] text-foreground mb-8"
          >
            Discover the{" "}
            <span className="italic text-gradient-olive">Healing Power</span>{" "}
            of Yoga
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-[15px] md:text-base text-muted-foreground max-w-md mb-12 leading-[1.8] font-light"
          >
            Specialised women's wellness yoga — pregnancy care, hormonal health, and holistic healing guided by Jisha Verma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/919893233681?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start Your Journey
              <span className="ml-2">→</span>
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-foreground/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

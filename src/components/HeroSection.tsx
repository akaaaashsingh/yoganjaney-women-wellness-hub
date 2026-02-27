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
      className="relative min-h-[100svh] flex items-center overflow-hidden sticky top-0 z-0"
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
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
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.5rem,8vw,2.5rem)] leading-[0.95] text-foreground mb-10 font-medium"
          >
            A journey of health strength and balance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-[18px] md:text-xl text-muted-foreground max-w-lg mb-14 leading-[1.7] font-light tracking-tight"
          >
            Yoga is an ancient science that serves as the ultimate tool for
            maintaining balance in today's fast-paced life. Yoga is not just
            about twisting the body; it is the art of connecting with oneself.
            It helps in boosting immunity, reducing stress, and infusing
            positive energy into your daily routine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.85,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="https://wa.me/919893233681?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="group flex items-center gap-2 font-body text-sm font-semibold text-primary/80 hover:text-primary transition-colors"
            >
              Explore Our Story
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
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

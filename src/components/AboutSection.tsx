import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-yoga.png";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="section-padding bg-background relative z-10 min-h-screen flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.05)]"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-24">
            About Us
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ scale: imgScale }}>
            <div className="relative rounded-[2rem] overflow-hidden">
              <img
                src={aboutImg}
                alt="Yoga instructor Jisha Verma"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h5 className="font-display text-xl md:text-2xl lg:text-3xl leading-[2] text-foreground font-medium">
              Empowering Women Through{" "}
              <span className="italic text-gradient-lilac">Yoga</span>
            </h5>
            <p className="font-body text-[15px] leading-[2] text-muted-foreground font-light">
              In the modern world, a woman's body undergoes constant
              physiological and emotional transitions. At Yoganjaney, we view
              Yoga not as a workout, but as a Therapeutic Tool designed to
              synchronize the female endocrine system, enhance reproductive
              health, and build mental resilience.
            </p>
            {/* <p className="font-body text-[15px] leading-[2] text-muted-foreground font-light">
              With expertise in pregnancy yoga, hormonal disorders like PCOD,
              thyroid management, and fertility support, we provide personalized
              care that goes beyond traditional yoga practice.
            </p>
            <p className="font-body text-[15px] leading-[2] text-muted-foreground font-light">
              Our holistic approach combines ancient yogic wisdom with modern
              understanding of women's health, creating a safe space for
              healing, growth, and empowerment in the heart of Raipur,
              Chhattisgarh.
            </p> */}
            <div className="pt-4">
              <p className="font-display text-xl text-foreground italic">
                — Jisha Verma
              </p>
              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">
                Founder, Yoganjaney
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

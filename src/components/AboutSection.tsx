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
    <section ref={ref} id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-4">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Empowering Women{" "}
            <br className="hidden md:block" />
            Through <span className="italic text-gradient-olive">Yoga</span>
          </h2>
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
            <p className="font-body text-[15px] leading-[2] text-muted-foreground font-light">
              At Yoganjaney, we believe in the transformative power of yoga to heal, strengthen, and empower women throughout their wellness journey. Our specialized approach focuses on addressing the unique health challenges that women face today.
            </p>
            <p className="font-body text-[15px] leading-[2] text-muted-foreground font-light">
              With expertise in pregnancy yoga, hormonal disorders like PCOD, thyroid management, and fertility support, we provide personalized care that goes beyond traditional yoga practice.
            </p>
            <p className="font-body text-[15px] leading-[2] text-muted-foreground font-light">
              Our holistic approach combines ancient yogic wisdom with modern understanding of women's health, creating a safe space for healing, growth, and empowerment in the heart of Raipur, Chhattisgarh.
            </p>
            <div className="pt-6">
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

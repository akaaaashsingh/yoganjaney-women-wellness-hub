import { motion } from "framer-motion";
import aboutImg from "@/assets/about-yoga.png";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
          Empowering Women Through <span className="text-gradient-olive italic">Yoga</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-primary/8 blur-2xl" />
            <img
              src={aboutImg}
              alt="Yoga instructor Jisha Verma"
              className="relative rounded-3xl w-full h-auto object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/20 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="font-body text-base leading-[1.8] text-muted-foreground">
            At Yoganjaney, we believe in the transformative power of yoga to heal, strengthen, and empower women throughout their wellness journey. Our specialized approach focuses on addressing the unique health challenges that women face today.
          </p>
          <p className="font-body text-base leading-[1.8] text-muted-foreground">
            With expertise in pregnancy yoga, hormonal disorders like PCOD, thyroid management, and fertility support, we provide personalized care that goes beyond traditional yoga practice.
          </p>
          <p className="font-body text-base leading-[1.8] text-muted-foreground">
            Our holistic approach combines ancient yogic wisdom with modern understanding of women's health, creating a safe space for healing, growth, and empowerment in the heart of Raipur, Chhattisgarh.
          </p>
          <div className="pt-4 border-t border-border">
            <p className="font-display text-lg text-foreground italic">
              — Jisha Verma, Founder
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

import { motion } from "framer-motion";
import aboutImg from "@/assets/about-yoga.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-2">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Empowering Women Through <span className="text-gradient-gold">Yoga</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-xl" />
            <img
              src={aboutImg}
              alt="Yoga instructor Jisha Verma"
              className="relative rounded-2xl w-full h-auto object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5"
        >
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            At Yoganjaney, we believe in the transformative power of yoga to heal, strengthen, and empower women throughout their wellness journey. Our specialized approach focuses on addressing the unique health challenges that women face today.
          </p>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            With expertise in pregnancy yoga, hormonal disorders like PCOD, thyroid management, and fertility support, we provide personalized care that goes beyond traditional yoga practice.
          </p>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            Our holistic approach combines ancient yogic wisdom with modern understanding of women's health, creating a safe space for healing, growth, and empowerment in the heart of Raipur, Chhattisgarh.
          </p>
          <p className="font-display text-lg font-semibold text-primary mt-4">
            — Jisha Verma, Founder
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

import { motion } from "framer-motion";
import {
  Heart,
  User,
  Shield,
  Leaf,
  LampWallDown,
  HeartPulse,
  Salad,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Women's Health Focus",
    desc: "Specialized focus on women's health and wellness through every life stage.",
  },
  {
    icon: User,
    title: "Personalized Approach",
    desc: "Customized routines tailored to your individual health needs and goals.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    desc: "Safe and supportive environment for all levels, from beginners to advanced.",
  },
  {
    icon: Leaf,
    title: "Holistic Healing",
    desc: "Holistic healing through yoga, meditation, and lifestyle guidance.",
  },
  {
    icon: LampWallDown,
    title: "Stress Management & Peaceful Mind",
    desc: "Yoga and meditation techniques to manage stress and cultivate a peaceful mind.",
  },
  {
    icon: HeartPulse,
    title: "Flexibility & Strength",
    desc: "Enhanced flexibility and strength with our comprehensive program.",
  },
  {
    icon: Salad,
    title: "Discipilne",
    desc: "Developing discipline and self-awareness through consistent practice.",
  },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-gradient-pastel relative z-20 min-h-screen flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-primary/60 mb-6">
          The Yoganjaney Difference
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground font-medium">
          Why Choose <span className="italic text-gradient-lilac">Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative bg-white/40 backdrop-blur-sm rounded-[2rem] p-10 text-center 
                       border border-white/40 hover:bg-white/60
                       hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:-translate-y-2
                       transition-all duration-700 cursor-default"
          >
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lilac/30 text-primary mb-8 
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700"
            >
              <r.icon size={24} strokeWidth={1.2} />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4">
              {r.title}
            </h3>
            <p className="font-body text-[14px] text-muted-foreground leading-relaxed font-light">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

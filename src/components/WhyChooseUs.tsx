import { motion } from "framer-motion";
import { Heart, User, Shield, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Women's Health Focus",
    desc: "Specialized focus on women's health and wellness through every life stage.",
  },
  {
    icon: User,
    title: "Personalized Approach",
    desc: "Personalized approach to individual health needs with customized routines.",
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
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyChooseUs = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-2">Why Yoganjaney</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Why Choose <span className="text-gradient-gold">Us</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {reasons.map((r) => (
          <motion.div
            key={r.title}
            variants={item}
            className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 text-gold mb-5">
              <r.icon size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;

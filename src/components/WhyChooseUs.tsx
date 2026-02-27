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
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">Why Yoganjaney</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
          Why Choose <span className="text-gradient-olive italic">Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="bg-background rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
              <r.icon size={26} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

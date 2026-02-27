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
];

const WhyChooseUs = () => (
  <section className="section-padding bg-card/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-4">
          Why Yoganjaney
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Why Choose <span className="italic text-gradient-olive">Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group bg-background rounded-2xl p-8 text-center 
                       hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1
                       transition-all duration-500 cursor-default"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/8 text-primary mb-6 
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <r.icon size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">{r.title}</h3>
            <p className="font-body text-[13px] text-muted-foreground leading-relaxed font-light">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

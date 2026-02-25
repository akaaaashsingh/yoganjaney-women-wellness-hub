import { motion } from "framer-motion";
import { Dumbbell, Scale, Baby, Brain, Flame, Droplets, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "General Yoga",
    desc: "Build strength, flexibility, and inner peace through traditional asana practices suitable for all levels.",
  },
  {
    icon: Scale,
    title: "Health & Weight Management",
    desc: "Sustainable yoga practices combined with lifestyle guidance for healthy weight loss and maintenance.",
  },
  {
    icon: Baby,
    title: "Kids Yoga",
    desc: "Fun and engaging yoga sessions that help children develop focus, coordination, and emotional balance.",
  },
  {
    icon: Brain,
    title: "Meditation & Pranayam",
    desc: "Mindfulness practices and breathing techniques to reduce stress and enhance mental clarity.",
  },
  {
    icon: Flame,
    title: "Ashtanga & Power Yoga",
    desc: "Dynamic and challenging sequences for those seeking intense physical practice and mental discipline.",
  },
  {
    icon: Droplets,
    title: "Detoxification",
    desc: "Natural cleansing practices to rejuvenate your body and boost energy levels through holistic methods.",
  },
  {
    icon: Stethoscope,
    title: "Pain Management",
    desc: "Therapeutic yoga sequences to alleviate back pain, knee pain, and improve overall physical wellness.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-2">What We Offer</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="bg-background rounded-2xl p-7 hover:shadow-lg transition-shadow group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-4 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;

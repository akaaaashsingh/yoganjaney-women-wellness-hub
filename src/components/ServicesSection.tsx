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
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">What We Offer</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
          Our <span className="text-gradient-olive italic">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-background rounded-3xl p-7 hover:shadow-xl transition-all duration-300 group cursor-default"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-gradient-olive group-hover:text-primary-foreground transition-colors duration-300">
              <s.icon size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

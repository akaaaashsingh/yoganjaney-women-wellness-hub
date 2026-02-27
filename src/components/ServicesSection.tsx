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
  <section id="services" className="section-padding bg-card/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-4">
          What We Offer
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Our <span className="italic text-gradient-olive">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group bg-background rounded-2xl p-8 
                       hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1
                       transition-all duration-500 cursor-default"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/8 text-primary mb-6 
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <s.icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-[13px] text-muted-foreground leading-relaxed font-light">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

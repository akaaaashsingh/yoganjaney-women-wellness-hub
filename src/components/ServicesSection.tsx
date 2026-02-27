import { motion } from "framer-motion";
import {
  Dumbbell,
  Scale,
  Baby,
  Brain,
  Flame,
  Droplets,
  Stethoscope,
} from "lucide-react";

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
    title: "Meditation & Mindfulness",
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
  <section
    id="services"
    className="section-padding bg-gradient-pastel relative z-40 min-h-screen flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-primary/60 mb-6">
          Our Offerings
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground font-medium">
          Holistic <span className="italic text-gradient-lilac">Wellness</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-10 
                       border border-white/40 hover:bg-white/60
                       hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:-translate-y-2
                       transition-all duration-700 cursor-default"
          >
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lilac/30 text-primary mb-8 
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700"
            >
              <s.icon size={24} strokeWidth={1.2} />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-4">
              {s.title}
            </h3>
            <p className="font-body text-[14px] text-muted-foreground leading-relaxed font-light">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

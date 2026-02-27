import { motion } from "framer-motion";
import pregnancyImg from "@/assets/pregnancy-yoga.png";
import meditationImg from "@/assets/meditation.png";

const specs = [
  {
    title: "Pregnancy Yoga",
    desc: "Safe and gentle yoga practices designed specifically for expecting mothers to support a healthy pregnancy journey.",
    img: pregnancyImg,
    alt: "Pregnancy yoga session",
  },
  {
    title: "Female Health",
    desc: "Specialised therapies for PCOD, thyroid disorders, and infertility through targeted yoga practices.",
    img: meditationImg,
    alt: "Women's health yoga session",
  },
];

const Specialisations = () => (
  <section id="specialisations" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">Expertise</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
          Our <span className="text-gradient-olive italic">Specialisations</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {specs.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl overflow-hidden shadow-lg cursor-default"
          >
            <img
              src={s.img}
              alt={s.alt}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl text-cream mb-2">{s.title}</h3>
              <p className="font-body text-sm text-cream/80 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Specialisations;

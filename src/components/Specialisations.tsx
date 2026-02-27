import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const SpecCard = ({ s, i }: { s: typeof specs[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-default"
    >
      <motion.img
        src={s.img}
        alt={s.alt}
        className="w-full h-full object-cover"
        style={{ scale: imgScale }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/30 to-transparent 
                       group-hover:from-earth/95 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
        <h3 className="font-display text-2xl md:text-3xl text-cream mb-3">{s.title}</h3>
        <p className="font-body text-sm text-cream/70 leading-relaxed font-light max-w-sm">{s.desc}</p>
      </div>
    </motion.div>
  );
};

const Specialisations = () => (
  <section id="specialisations" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-4">
          Expertise
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Our <span className="italic text-gradient-olive">Specialisations</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {specs.map((s, i) => (
          <SpecCard key={s.title} s={s} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Specialisations;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pregnancyImg from "@/assets/pregnancy-yoga.png";
import meditationImg from "@/assets/meditation.png";

const specs = [
  {
    title: "Pregnancy Yoga",
    desc: [
      "Prenatal Yoga: The Science of Conscious Motherhood",
      "Pregnancy is a marathon, not just a physical state. Our Prenatal Yoga program is curated to prepare you for the 'big day' while ensuring your baby thrives in a stress-free environment.",
      "Strategic Benefits of Pregnancy Yoga:",
      "Neuromuscular Control for Labor: Specialized breathing techniques (Pranayama) provide the control needed for coordinated relaxation and contraction during childbirth.",
      "Optimizing Fetal Environment: Reducing maternal stress improves oxygen and nutrient delivery to the baby.",
      "Structural Alignment: Strengthens the core and spinal stabilizers, alleviating back pain and sciatica.",
      "Managing Gestational Complications: Linked to lower risk of hypertension and gestational diabetes.",
      "Postpartum Foundation: Pelvic floor engagement ensures faster recovery after delivery.",
    ],
    img: pregnancyImg,
    alt: "Pregnancy yoga session",
  },
  {
    title: "Female Health",
    desc: [
      "Why Women Need a Specialized Yoga Practice?",
      "• Hormonal Equilibrium: Yoga is scientifically proven to lower cortisol (the stress hormone) and regulate the hypothalamic-pituitary-adrenal (HPA) axis, which is crucial for balancing Estrogen and Progesterone.",
      "• Pelvic Health & Vitality: Specific asanas improve blood circulation to the pelvic region, supporting reproductive organs and managing conditions like PCOS, PCOD, and Menstrual Irregularities.",
      "• Bone Density & Longevity: Weight-bearing yoga poses help maintain bone mineral density, a critical factor for women as they age to prevent Osteoporosis.",
      "• Emotional Fortitude: Beyond physical strength, yoga fosters 'Mind-Body Mapping', helping women navigate life's pressures with a calm and centered nervous system.",
    ],
    img: meditationImg,
    alt: "Women's health yoga session",
  },
];

const SpecCard = ({ s, i }: { s: (typeof specs)[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="grid md:grid-cols-2 gap-10 items-center rounded-[2rem] overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[2rem] min-h-[320px] md:min-h-[420px]">
        <motion.img
          src={s.img}
          alt={s.alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: imgScale }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-10">
        <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
          {s.title}
        </h3>

        <div className="font-body text-[15px] text-foreground/80 leading-relaxed font-light space-y-4">
          {s.desc.map((line, index) => {
            // If line contains colon, treat text before colon as heading
            if (line.includes(":")) {
              const [heading, ...rest] = line.split(":");
              return (
                <p key={index}>
                  <span className="font-semibold text-foreground">
                    {heading}:
                  </span>
                  {rest.join(":")}
                </p>
              );
            }

            return <p key={index}>{line}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

const Specialisations = () => (
  <section
    id="specialisations"
    className="section-padding bg-background relative z-30"
  >
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
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground font-medium">
          Our <span className="italic text-gradient-lilac">Expertise</span>
        </h2>
      </motion.div>

      {/* Vertical list */}
      <div className="space-y-20">
        {specs.map((s, i) => (
          <SpecCard key={s.title} s={s} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Specialisations;

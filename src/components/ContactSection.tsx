import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98932 33681",
    href: "tel:+919893233681",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98932 33681",
    href: "https://wa.me/919893233681?text=Hi",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@yoganjaney_official",
    href: "https://instagram.com/yoganjaney_official",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Raipur, Chhattisgarh",
    href: "https://maps.app.goo.gl/o2wwRFf9Fc6DTr8JA",
    external: true,
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-gradient-pastel relative z-50 min-h-screen flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-4">
          Reach Out
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground font-medium">
          Get in <span className="italic text-gradient-lilac">Touch</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6 bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-10 
                       border border-white/40 hover:bg-white/60
                       hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:-translate-y-2
                       transition-all duration-700 group text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-lilac/30 text-primary flex items-center justify-center 
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700">
              <c.icon size={24} strokeWidth={1.2} />
            </div>
            <div>
              <p className="font-display text-xl text-foreground mb-2">{c.label}</p>
              <p className="font-body text-[14px] text-muted-foreground font-light">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

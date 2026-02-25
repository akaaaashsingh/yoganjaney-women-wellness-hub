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
    href: "#",
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-2">Reach Out</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Get in <span className="text-gradient-gold">Touch</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-3 bg-card rounded-2xl p-6 hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-colors">
              <c.icon size={22} />
            </div>
            <p className="font-display text-sm font-semibold text-foreground">{c.label}</p>
            <p className="font-body text-xs text-muted-foreground text-center">{c.value}</p>
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

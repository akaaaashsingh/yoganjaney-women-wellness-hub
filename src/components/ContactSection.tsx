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
  <section id="contact" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">Reach Out</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
          Get in <span className="text-gradient-olive italic">Touch</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="flex flex-col items-center gap-3 bg-card rounded-3xl p-7 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gradient-olive group-hover:text-primary-foreground transition-colors duration-300">
              <c.icon size={22} strokeWidth={1.5} />
            </div>
            <p className="font-display text-sm text-foreground">{c.label}</p>
            <p className="font-body text-xs text-muted-foreground text-center">{c.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

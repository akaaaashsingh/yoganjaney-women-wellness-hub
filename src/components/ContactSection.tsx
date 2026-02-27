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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-primary/70 mb-4">
          Reach Out
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Get in <span className="italic text-gradient-olive">Touch</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-4 bg-card/60 rounded-2xl p-8 
                       hover:bg-card hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1
                       transition-all duration-500 group"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center 
                            group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <c.icon size={20} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-display text-sm text-foreground mb-1">{c.label}</p>
              <p className="font-body text-xs text-muted-foreground">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

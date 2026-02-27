import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Specialisations", href: "/#specialisations" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  { label: "Courses", href: "/courses" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-sm border-b border-white/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src={logo}
            alt="Yoganjaney logo"
            className="h-10 md:h-12 w-auto"
            loading="eager"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/#") && isHome ? (
                <a
                  href={l.href.replace("/", "")}
                  className="font-body text-[13px] font-medium tracking-wider text-foreground/70 hover:text-primary transition-all duration-300"
                >
                  {l.label.toUpperCase()}
                </a>
              ) : (
                <Link
                  to={l.href}
                  className="font-body text-[13px] font-medium tracking-wider text-foreground/70 hover:text-primary transition-all duration-300"
                >
                  {l.label.toUpperCase()}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/919893233681?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-6 !py-2.5 !text-[12px] uppercase tracking-widest shadow-none hover:shadow-lg hover:shadow-primary/20"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-5 py-8">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {l.href.startsWith("/#") && isHome ? (
                    <a
                      href={l.href.replace("/", "")}
                      onClick={() => setOpen(false)}
                      className="font-body text-[15px] text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="font-body text-[15px] text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://wa.me/919893233681?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Session
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

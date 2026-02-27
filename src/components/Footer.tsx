import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-earth py-16 px-6 md:px-8 border-t border-white/5 relative z-[60]">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-10">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src={logo} alt="Yoganjaney" className="h-10 w-auto brightness-[20]" loading="lazy" />
      </Link>
      <p className="font-body text-[11px] text-white/30 text-center tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} Yoganjaney. All rights reserved.
      </p>
      <div className="flex gap-10">
        <Link
          to="/courses"
          className="font-body text-[11px] font-medium text-white/40 hover:text-white transition-all duration-500 tracking-[0.2em] uppercase"
        >
          Courses
        </Link>
        <a
          href="https://instagram.com/yoganjaney_official"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[11px] font-medium text-white/40 hover:text-white transition-all duration-500 tracking-[0.2em] uppercase"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/919893233681?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[11px] font-medium text-white/40 hover:text-white transition-all duration-500 tracking-[0.2em] uppercase"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

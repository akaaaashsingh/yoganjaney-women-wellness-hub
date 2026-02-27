import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12 px-6 md:px-8">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="flex items-center gap-2">
        <img src={logo} alt="Yoganjaney" className="h-10 w-auto brightness-[10]" loading="lazy" />
      </a>
      <p className="font-body text-xs text-background/30 text-center tracking-wide">
        © {new Date().getFullYear()} Yoganjaney. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a
          href="https://instagram.com/yoganjaney_official"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-background/30 hover:text-background/70 transition-colors duration-300 tracking-wide"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/919893233681?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-background/30 hover:text-background/70 transition-colors duration-300 tracking-wide"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

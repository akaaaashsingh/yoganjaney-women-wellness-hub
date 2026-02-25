import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-warm-brown py-10 px-4 md:px-8">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Yoganjaney" className="h-10 w-auto brightness-200" loading="lazy" />
      </div>
      <p className="font-body text-sm text-cream/60 text-center">
        © {new Date().getFullYear()} Yoganjaney. All rights reserved. Built with ❤️ in Raipur.
      </p>
      <div className="flex gap-5">
        <a href="https://instagram.com/yoganjaney_official" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-cream/60 hover:text-cream transition-colors">
          Instagram
        </a>
        <a href="https://wa.me/919893233681?text=Hi" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-cream/60 hover:text-cream transition-colors">
          WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

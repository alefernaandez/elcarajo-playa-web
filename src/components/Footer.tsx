import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-script text-3xl font-bold mb-4">El Carajo</h3>
            <p className="text-white/80 mb-4">
              Tu bar de playa para cerveza fría y buenas tapas
            </p>
            <p className="text-sm text-white/60 italic">
              El mar, los barcos y la buena compañía
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center justify-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                Paseo Marítimo, 42 - Torremolinos
              </p>
              <p className="flex items-center justify-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                +34 952 123 456
              </p>
              <p className="text-sm">
                Abierto todos los días: 10:00 - 02:00
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a 
                href="https://instagram.com/elcarajo_bar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/elcarajo.bar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/60">
              Comparte tu momento en El Carajo
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} El Carajo. Todos los derechos reservados.
            </p>
            <p className="text-sm text-white/60">
              Hecho con ❤️ para los amantes del mar y la buena mesa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
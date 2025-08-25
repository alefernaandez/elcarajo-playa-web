import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation, Instagram, Facebook } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-32 bg-gradient-to-br from-sand-light via-background to-sand-light/50">
      <div className="container mx-auto px-6">
        {/* Header with creative elements */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px bg-ocean w-20"></div>
            <MapPin className="w-10 h-10 text-ocean" />
            <div className="h-px bg-ocean w-20"></div>
          </div>
          <h2 className="font-script text-6xl md:text-7xl font-bold text-ocean mb-6 tracking-wide">
            Dónde Estamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            🏖️ A un paso de la playa, donde la brisa del mar se encuentra con la cerveza más fría
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Map Section */}
          <Card className="overflow-hidden shadow-2xl border-0 mb-16">
            <CardContent className="p-0">
              <div className="w-full h-[500px] bg-sand-light relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.4547!2d-4.6247!3d36.5392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMyJzIxLjEiTiA0wrAzNzczMC45Ilc!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700 hover:saturate-110"
                ></iframe>
                
                {/* Enhanced Overlay */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-ocean to-ocean-dark rounded-full animate-pulse"></div>
                    <h4 className="font-script text-xl text-ocean font-semibold">El Carajo</h4>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Tu bar de playa para cerveza fría y buenas tapas
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>📍 Paseo Marítimo de Andalucía, 42</p>
                    <p>🌊 A 50 metros de la playa</p>
                  </div>
                </div>

                {/* Corner CTA */}
                <div className="absolute bottom-6 right-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-ocean to-ocean-dark hover:from-ocean-dark hover:to-ocean text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://maps.google.com/?q=Paseo+Marítimo+Andalucía+42+Fuengirola', '_blank')}
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Beach Access */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-sand-light/30 border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">🏖️</div>
                <h3 className="font-script text-2xl text-ocean mb-3">Acceso a Playa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A solo <strong className="text-ocean">50 metros</strong> de la arena dorada de Los Boliches
                </p>
              </CardContent>
            </Card>

            {/* Parking */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-ocean/5 border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">🚗</div>
                <h3 className="font-script text-2xl text-ocean mb-3">Parking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zona azul cercana y <strong className="text-ocean">aparcamientos públicos</strong> disponibles
                </p>
              </CardContent>
            </Card>

            {/* Transport */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-wood/10 border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">🚌</div>
                <h3 className="font-script text-2xl text-ocean mb-3">Transporte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Paradas de bus cercanas y <strong className="text-ocean">fácil acceso</strong> desde el centro
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
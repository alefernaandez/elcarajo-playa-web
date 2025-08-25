import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation, Instagram, Facebook } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Dónde Estamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos a un paso de la playa, ven que la cerveza ya está fría
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-ocean text-white p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Dirección</h3>
                      <p className="text-muted-foreground">
                        Paseo Marítimo de Andalucía, 42<br />
                        29640 Fuengirola, Málaga<br />
                        Frente a la Playa de Los Boliches
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-wood text-white p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Horarios</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p><strong>Lunes a Jueves:</strong> 12:00 - 01:00</p>
                        <p><strong>Viernes y Sábado:</strong> 12:00 - 02:00</p>
                        <p><strong>Domingo:</strong> 12:00 - 00:30</p>
                        <p className="text-sm italic mt-2">Cocina cierra 1h antes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-light text-white p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contacto</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p><strong>Teléfono:</strong> +34 952 123 456</p>
                        <p><strong>WhatsApp:</strong> +34 666 789 012</p>
                        <p><strong>Email:</strong> hola@elcarajo.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-wood hover:bg-wood-dark text-white shadow-beer"
                onClick={() => window.open('https://maps.google.com/?q=Paseo+Marítimo+Andalucía+42+Fuengirola', '_blank')}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Cómo Llegar
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline"
                  className="border-ocean text-ocean hover:bg-ocean hover:text-white"
                  onClick={() => window.open('tel:+34952123456')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-wood text-wood hover:bg-wood hover:text-white"
                  onClick={() => window.open('https://wa.me/34666789012', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-sunset border-none shadow-beer">
              <CardContent className="p-6 text-center">
                <h3 className="font-script text-xl text-ocean-dark mb-4">
                  Síguenos y Comparte Tu Momento en El Carajo
                </h3>
                <div className="flex justify-center gap-4 mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-ocean hover:bg-ocean hover:text-white"
                    onClick={() => window.open('https://instagram.com/elcarajofuengirola', '_blank')}
                  >
                    <Instagram className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-ocean hover:bg-ocean hover:text-white"
                    onClick={() => window.open('https://facebook.com/elcarajofuengirola', '_blank')}
                  >
                    <Facebook className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Etiquétanos en tus fotos: <strong>#ElCarajo #BarDePlaya</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-nautical">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-sand-light relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.4547!2d-4.6247!3d36.5392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMyJzIxLjEiTiA0wrAzNyczMC45Ilc!5e0!3m2!1sen!2ses!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  
                  {/* Overlay with bar info */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-soft max-w-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-ocean rounded-full"></div>
                      <h4 className="font-semibold text-ocean">El Carajo</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Tu bar de playa para cerveza fría y buenas tapas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏖️</div>
                  <h4 className="font-semibold text-ocean mb-1">Playa</h4>
                  <p className="text-sm text-muted-foreground">A 50 metros</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🚗</div>
                  <h4 className="font-semibold text-ocean mb-1">Parking</h4>
                  <p className="text-sm text-muted-foreground">Zona azul cercana</p>
                </CardContent>
              </Card>
            </div>

            {/* Welcome Message */}
            <div className="bg-ocean text-white p-6 rounded-lg shadow-nautical text-center">
              <h4 className="font-script text-xl mb-2">¡Te Esperamos!</h4>
              <p className="text-sm opacity-90">
                Ven cuando quieras, aquí siempre hay sitio para un amigo. 
                La cerveza está fría y las tapas listas para compartir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
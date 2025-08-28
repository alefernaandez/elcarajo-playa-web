import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Ubicación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos a un paso de la playa, ven que la cerveza ya está fría
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
            <CardContent className="p-6 space-y-6">
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

              <Separator />

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

              <Separator />

              <div className="flex items-start gap-4">
                <div className="bg-ocean-light text-white p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contacto</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><strong>Teléfono:</strong> +34 952 123 456</p>
                    <p><strong>Horario cocina:</strong> cierra 1h antes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-center">
            <Button 
              className="bg-wood hover:bg-wood-dark text-white shadow-beer"
              onClick={() => window.open('https://maps.google.com/?q=Paseo+Marítimo+Andalucía+42+Fuengirola', '_blank')}
            >
              <Navigation className="w-5 h-5 mr-2" />
              Cómo Llegar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import barInteriorImage from '@/assets/bar-interior.jpg';

const Row = ({ icon, title, children }: { icon: JSX.Element, title: string, children: JSX.Element }) => (
  <div className="grid grid-cols-[auto,1fr] gap-4 items-start justify-center">
    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sand">{icon}</div>
    <div className="text-left">
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      {children}
    </div>
  </div>
);

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen izquierda (temporal) */}
          <div>
            <Card className="overflow-hidden shadow-nautical">
              <CardContent className="p-0">
                <img 
                  src={'/Ubicacion.jpg'}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = barInteriorImage; }}
                  alt="Ubicación"
                  className="w-full h-[500px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Card derecha */}
          <div>
            <Card className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
              <CardContent className="p-6 space-y-6 text-center">
                <Row icon={<MapPin className="w-6 h-6 text-ocean" />} title="Dirección">
                  <p className="text-muted-foreground">C. Rompeolas, 22<br/>21130 Mazagón, Huelva</p>
                </Row>

                <Separator />

                <Row icon={<Clock className="w-6 h-6 text-wood" />} title="Horario">
                  <div className="text-muted-foreground space-y-1">
                    <p><strong>Jueves:</strong> 12:00–16:00, 20:00–24:00</p>
                    <p><strong>Viernes:</strong> 12:00–16:00, 20:00–24:00</p>
                    <p><strong>Sábado:</strong> 12:00–16:00, 20:00–24:00</p>
                    <p><strong>Domingo:</strong> 12:00–16:00, 20:00–24:00</p>
                    <p><strong>Lunes:</strong> 12:00–16:00, 20:00–24:00</p>
                    <p><strong>Martes:</strong> Cerrado</p>
                    <p><strong>Miércoles:</strong> 20:00–24:00</p>
                  </div>
                </Row>

                <Separator />

                <Row icon={<Phone className="w-6 h-6 text-ocean-light" />} title="Contacto">
                  <div className="text-muted-foreground space-y-1">
                    <p><strong>Teléfono:</strong> 643 89 48 95</p>
                  </div>
                </Row>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-center">
              <Button 
                className="bg-wood hover:bg-wood-dark text-white shadow-beer"
                onClick={() => window.open('https://www.google.com/maps/place/El+Carajo/@37.1374984,-6.8320571,17z/data=!3m1!4b1!4m6!3m5!1s0xd11df4844668be1:0x4cf6670948d21c4c!8m2!3d37.1374984!4d-6.8294822!16s%2Fg%2F11t566f82_?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Cómo Llegar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
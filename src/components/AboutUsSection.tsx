import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Heart, Users } from 'lucide-react';
import { FEATURES } from '@/lib/content';
import barInteriorImage from '@/assets/bar-interior.jpg';

const AboutUsSection = () => {
  const featureIconMap: Record<string, JSX.Element> = {
    Anchor: <Anchor className="w-8 h-8 text-ocean" />,
    Heart: <Heart className="w-8 h-8 text-wood" />,
    Users: <Users className="w-8 h-8 text-ocean-light" />,
  };

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean">
            Sobre Nosotros
          </h2>
        </div>

        {/* Texto izquierda + Imagen derecha con alturas iguales */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
          <div className="h-full flex items-center justify-center text-center">
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                El carajo situado en un enclave de tierra, mar, vida y sol...donde la gastronomía es su bandera. 
                Que la cruz en tu mapa te guíe hacia nosotros! Buena proa, marinero.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                El carajo se le llama a la pequeña canastilla que se encontraba en el palo mayor de las antiguas naves; 
                a los marineros se les mandaba al carajo en forma de castigo, de ahí la expresión.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-nautical h-full">
              <CardContent className="p-0 h-full">
                <img 
                  src={'/Sobre nosotros.jpg'}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = barInteriorImage; }}
                  alt="Sobre nosotros"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cards debajo */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {featureIconMap[feature.iconName]}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
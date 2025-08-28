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

        {/* Grid: izquierda (texto + mini-cards) / derecha (imagen) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Columna izquierda sincr. de altura */}
          <div className="min-h-[360px] md:min-h-[400px] lg:min-h-[440px] flex flex-col justify-between">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                El carajo situado en un enclave de tierra, mar, vida y sol...donde la gastronomía es su bandera. 
                Que la cruz en tu mapa te guíe hacia nosotros! Buena proa, marinero.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                El carajo se le llama a la pequeña canastilla que se encontraba en el palo mayor de las antiguas naves; 
                a los marineros se les mandaba al carajo en forma de castigo, de ahí la expresión.
              </p>
            </div>

            {/* Mini-cards debajo del texto */}
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {FEATURES.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-90">{featureIconMap[feature.iconName]}</div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: imagen con altura sincronizada */}
          <div className="relative">
            <Card className="overflow-hidden shadow-nautical">
              <CardContent className="p-0">
                <img 
                  src={'/Sobre nosotros.jpg'}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = barInteriorImage; }}
                  alt="Sobre nosotros"
                  className="w-full h-[360px] md:h-[400px] lg:h-[440px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
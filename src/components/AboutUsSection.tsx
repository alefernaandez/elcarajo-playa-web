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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una historia de pasión, mar y buena comida que comenzó con un sueño 
            y se convirtió en el hogar de muchos
          </p>
        </div>

        {/* First Section: About Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-ocean">El Carajo</span> nació de la pasión por 
                la buena comida, la cerveza fría y las tertulias frente al mar. Nuestro nombre, 
                tan auténtico como desenfadado, refleja el espíritu alegre y directo de Andalucía.
              </p>
              
              <p className="leading-relaxed">
                Cada rincón de nuestro bar cuenta una historia marinera. Desde el mapa del mundo 
                pintado en la pared hasta los barriles que nos recuerdan los viajes por los mares, 
                todo está pensado para transportarte a esa sensación de libertad que solo el océano 
                puede dar.
              </p>
              
              <p className="leading-relaxed">
                Aquí no solo servimos las mejores tapas del sur y la cerveza más fría de la costa, 
                sino que creamos un espacio donde cada cliente se convierte en parte de nuestra familia. 
                Porque al final, lo que realmente importa es la buena compañía y los momentos que 
                compartimos alrededor de una mesa.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
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

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-nautical">
              <CardContent className="p-0">
                <img 
                  src={barInteriorImage}
                  alt="Interior de El Carajo con decoración marinera"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>
            
            {/* Decorative Quote */}
            <div className="absolute -bottom-6 -right-6 bg-wood text-white p-6 rounded-lg shadow-beer max-w-xs">
              <p className="font-script text-lg italic">
                "Donde el mar se encuentra con la buena mesa"
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutUsSection;
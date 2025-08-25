import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Heart, Users } from 'lucide-react';
import barInteriorImage from '@/assets/bar-interior.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: <Anchor className="w-8 h-8 text-ocean" />,
      title: 'Tradición Marinera',
      description: 'Inspirados en la cultura marinera andaluza, cada detalle cuenta una historia del mar.'
    },
    {
      icon: <Heart className="w-8 h-8 text-wood" />,
      title: 'Ambiente Familiar',
      description: 'Un lugar donde todos se sienten como en casa, con el calor humano del sur.'
    },
    {
      icon: <Users className="w-8 h-8 text-ocean-light" />,
      title: 'Buena Compañía',
      description: 'El punto de encuentro perfecto para compartir momentos únicos frente al mar.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean">
              Sobre Nosotros
            </h2>
            
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
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
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

        {/* Bottom Quote */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <blockquote className="font-script text-2xl md:text-3xl text-ocean italic leading-relaxed">
            "En El Carajo no solo sirves una cerveza, creas memorias. 
            Aquí cada atardecer es una excusa perfecta para brindar por la vida."
          </blockquote>
          <cite className="block mt-4 text-muted-foreground">- Equipo El Carajo</cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
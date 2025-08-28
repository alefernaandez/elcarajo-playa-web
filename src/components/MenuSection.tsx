import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Beer, Utensils } from 'lucide-react';
import coldBeerImage from '@/assets/cold-beer.jpg';
import tapasImage from '@/assets/spanish-tapas.jpg';
import { MENU_CATEGORIES } from '@/lib/content';

const MenuSection = () => {
  const iconByName: Record<string, JSX.Element> = {
    Utensils: <Utensils className="w-5 h-5" />,
    Beer: <Beer className="w-5 h-5" />,
  };

  const popularItems = [
    'Jamón Ibérico',
    'Caña',
    'Patatas bravas',
    'Pulpo a la gallega'
  ];

  return (
    <section id="carta" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Nuestra Carta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabores auténticos del sur, con el mejor pescado fresco y cerveza bien fría
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-nautical group">
            <img 
              src={coldBeerImage} 
              alt="Cerveza fría"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-script text-2xl font-bold">Cerveza Fría</h3>
              <p className="text-sm opacity-90">Siempre a la temperatura perfecta</p>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-nautical group">
            <img 
              src={tapasImage} 
              alt="Tapas españolas"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-script text-2xl font-bold">Tapas Tradicionales</h3>
              <p className="text-sm opacity-90">Sabores del sur de España</p>
            </div>
          </div>
        </div>


        {/* Menu Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {MENU_CATEGORIES.map((category) => (
            <Card key={category.id} className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-ocean">{iconByName[category.iconName]}</div>
                  <CardTitle className="font-script text-2xl text-ocean">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={index} className="border-b border-sand last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <span className="font-semibold text-ocean">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Tienes alguna alergia o preferencia especial?
          </p>
          <p className="text-sm text-muted-foreground">
            Nuestro equipo estará encantado de ayudarte a elegir el mejor plato
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Beer, Utensils } from 'lucide-react';
import coldBeerImage from '@/assets/cold-beer.jpg';
import tapasImage from '@/assets/spanish-tapas.jpg';

const MenuSection = () => {
  const menuCategories = [
    {
      id: 'tapas',
      title: 'Tapas Clásicas',
      icon: <Utensils className="w-5 h-5" />,
      items: [
        { name: 'Jamón Ibérico', price: '12€', description: 'Cortado a cuchillo, con pan tostado' },
        { name: 'Boquerones en vinagre', price: '6€', description: 'Frescos del día, con ajo y perejil' },
        { name: 'Patatas bravas', price: '5€', description: 'Con salsa brava casera' },
        { name: 'Croquetas de jamón', price: '7€', description: '4 unidades, bechamel cremosa' },
        { name: 'Pulpo a la gallega', price: '14€', description: 'Con patatas, pimentón y aceite' },
        { name: 'Tortilla española', price: '6€', description: 'Jugosa, con cebolla' }
      ]
    },
    {
      id: 'raciones',
      title: 'Raciones',
      icon: <Utensils className="w-5 h-5" />,
      items: [
        { name: 'Fritura de pescado', price: '16€', description: 'Boquerones, sardinas y calamares' },
        { name: 'Paella marinera', price: '18€', description: 'Para 2 personas, arroz bomba' },
        { name: 'Secreto ibérico', price: '15€', description: 'A la plancha con pimientos' },
        { name: 'Tabla de quesos', price: '12€', description: 'Manchego, cabrales y membrillo' },
        { name: 'Ensaladilla rusa', price: '8€', description: 'Receta de la abuela' }
      ]
    },
    {
      id: 'bebidas',
      title: 'Bebidas',
      icon: <Beer className="w-5 h-5" />,
      items: [
        { name: 'Caña', price: '2€', description: 'Bien fría, siempre' },
        { name: 'Tinto de verano', price: '3€', description: 'Con gaseosa, limón y hielo' },
        { name: 'Sangría', price: '4€', description: 'Receta secreta de la casa' },
        { name: 'Rebujito', price: '4€', description: 'Manzanilla, sprite y yerbabuena' },
        { name: 'Agua con gas', price: '2€', description: 'Solán de Cabras' },
        { name: 'Refrescos', price: '2.5€', description: 'Coca-Cola, Fanta, Sprite' }
      ]
    }
  ];

  const popularItems = [
    'Jamón Ibérico',
    'Caña',
    'Patatas bravas',
    'Pulpo a la gallega'
  ];

  return (
    <section id="carta" className="py-32 bg-gradient-to-br from-sand-light via-background/50 to-sand-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px bg-wood w-20"></div>
            <Utensils className="w-10 h-10 text-wood" />
            <div className="h-px bg-wood w-20"></div>
          </div>
          <h2 className="font-script text-6xl md:text-7xl font-bold text-ocean mb-8 tracking-wide">
            Nuestra Carta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            🍤 Sabores auténticos del sur, con el mejor pescado fresco y cerveza bien fría
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
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
        <div className="grid lg:grid-cols-3 gap-10">
          {menuCategories.map((category) => (
            <Card key={category.id} className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-ocean">{category.icon}</div>
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
        <div className="text-center mt-24">
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
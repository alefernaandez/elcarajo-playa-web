import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

const tapasYRaciones = [
  { name: 'Tortilla de patatas con cebolla caramelizada', price: '4,50€' },
  { name: 'Patatas bravas', price: '5,00€' },
  { name: 'Pollo del Carajo', price: '7,00€' },
  { name: 'Pollo en salsa cabrales', price: '5,00€' },
  { name: 'Ensaladilla de camarones', price: '5,00€' },
  { name: 'Nachos', price: '9,00€' },
  { name: 'Flamenquín', price: '11,00€' },
  { name: 'Langostino con bechamel rebozado', price: '8,50€' },
  { name: 'Champiñones rellenos', price: '8,50€' },
  { name: 'Queso curado de oveja', price: '7,00€' },
  { name: 'Lomo de orza', price: '5,00€' },
  { name: 'Tomatito con vinagreta de aguacate', price: '6,00€' },
  { name: 'Adobo', price: '7,00€' },
  { name: 'Croquetas', price: '6,00€' },
  { name: 'Rabo de toro', price: '6,00€' },
  { name: 'Bacalao', price: '6,00€' },
  { name: 'Jamón', price: '6,00€' },
  { name: 'Chocos', price: '7,00€' },
  { name: 'Caracoles', price: '4,50€' },
  { name: 'Pimentada con atún (fuera de carta)', price: '4,50€' },
];

const MenuComida = () => {
  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-2">Tapas y Raciones</h1>
          <p className="text-muted-foreground">Clásicos para compartir y disfrutar</p>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center gap-2 text-ocean">
              <Utensils className="w-5 h-5" />
              <CardTitle>Tapas y Raciones</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {tapasYRaciones.map((item, index) => (
              <div key={index} className="border-b border-sand last:border-b-0 pb-3 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-foreground">{item.name}</h4>
                  <span className="font-semibold text-ocean">{item.price}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MenuComida;

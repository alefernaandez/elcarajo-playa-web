import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Beer } from 'lucide-react';

const bebidas = [
  { name: 'Caña', price: '2€', description: 'Bien fría, siempre' },
  { name: 'Tinto de verano', price: '3€', description: 'Con gaseosa, limón y hielo' },
  { name: 'Sangría', price: '4€', description: 'Receta secreta de la casa' },
  { name: 'Rebujito', price: '4€', description: 'Manzanilla, sprite y yerbabuena' },
  { name: 'Agua con gas', price: '2€', description: 'Solán de Cabras' },
  { name: 'Refrescos', price: '2.5€', description: 'Coca-Cola, Fanta, Sprite' }
];

const MenuBebida = () => {
  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-2">Carta de Bebidas</h1>
          <p className="text-muted-foreground">Siempre frías y listas para brindar</p>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center gap-2 text-ocean">
              <Beer className="w-5 h-5" />
              <CardTitle>Bebidas</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {bebidas.map((item, index) => (
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
      </div>
    </section>
  );
};

export default MenuBebida;

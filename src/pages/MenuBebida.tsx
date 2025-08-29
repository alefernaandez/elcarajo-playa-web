import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Beer, Wine, CupSoda } from 'lucide-react';

const cervezas = [
  ['Caña', '1,60€'],
  ['Caña con Blanca', '1,60€'],
  ['Caña Limón', '1,60€'],
  ['Cañón', '3,50€'],
  ['Cerveza sin gluten', '3,00€'],
  ['Cerveza tubo', '2,00€'],
  ['Copa de cerveza', '3,50€'],
  ['Cortada', '2,00€'],
  ['Cortada copa', '2,00€'],
  ['Cortada limón', '2,00€'],
  ['Cruzcampo sin', '2,00€'],
  ['Heineken', '3,00€'],
  ['Radler', '2,50€'],
  ['Tercio', '3,00€'],
  ['Tostada 0,0', '3,00€'],
];

const refrescos = [
  ['7Up', '2,00€'],
  ['Acuario Limón', '2,00€'],
  ['Acuario Naranja', '2,00€'],
  ['Agua', '1,50€'],
  ['Calimocho', '2,00€'],
  ['Coca Cola', '2,00€'],
  ['Coca Cola Zero', '2,00€'],
  ['Fanta Limón', '2,00€'],
  ['Fanta Naranja', '2,00€'],
  ['Gaseosa Blanca', '2,00€'],
  ['Gaseosa Limón', '2,00€'],
  ['Gaseosa Naranja', '2,00€'],
  ['Limonada', '2,00€'],
  ['Nestea', '2,00€'],
  ['Redbull', '2,50€'],
  ['Tinto + Fanta Limón', '2,00€'],
  ['Tinto + Fanta Naranja', '2,00€'],
  ['Tinto + Gaseosa Blanca', '2,00€'],
  ['Tinto sin Alcohol', '2,00€'],
  ['Tónica', '2,00€'],
  ['Zumo Melocotón', '1,70€'],
  ['Zumo Piña', '1,70€'],
];

const vinos = [
  ['Vermu', '4,00€'],
  ['Arrocal (copa)', '4,20€'],
  ['Arrocal (botella)', '22,00€'],
  ['Barbadillo Solea', '9,00€'],
  ['Barredo (copa)', '2,50€'],
  ['Barredo (botella)', '12,00€'],
  ['Cría Cuervo Rioja (copa)', '3,30€'],
  ['Cría Cuervo Rioja (botella)', '22,00€'],
  ['Cría Cuervo Rueda + Verdejo', '19,00€'],
  ['Cría Cuervo Rueda (copa)', '3,30€'],
  ['Loess Inspiration (copa)', '4,30€'],
  ['Loess Inspiration (botella)', '22,00€'],
  ['Mesta (copa)', '2,50€'],
  ['Mesta (botella)', '12,00€'],
  ['Pinna Fidelis (copa)', '3,80€'],
  ['Pinna Fidelis (botella)', '16,00€'],
  ['Viñagamo (copa)', '2,50€'],
  ['Viñagamo (botella)', '12,00€'],
];

const Section = ({ icon, title, items }: { icon: JSX.Element; title: string; items: [string, string][] }) => (
  <Card className="shadow-soft">
    <CardHeader>
      <div className="flex items-center gap-2 text-ocean">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      {items.map(([name, price], idx) => (
        <div key={idx} className="border-b border-sand last:border-b-0 pb-2 last:pb-0">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-foreground">{name}</h4>
            <span className="font-semibold text-ocean">{price}</span>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const MenuBebida = () => {
  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center mb-4">
          <h1 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-2">Bebidas</h1>
          <p className="text-muted-foreground">Cervezas, refrescos, vinos y vermuts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Section icon={<Beer className="w-5 h-5" />} title="Cervezas" items={cervezas} />
          <Section icon={<CupSoda className="w-5 h-5" />} title="Refrescos y Sin Alcohol" items={refrescos} />
          <Section icon={<Wine className="w-5 h-5" />} title="Vinos y Vermuts" items={vinos} />
        </div>
      </div>
    </section>
  );
};

export default MenuBebida;

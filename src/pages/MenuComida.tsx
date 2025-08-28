import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

const tapasClasicas = [
  { name: 'Jamón Ibérico', price: '12€', description: 'Cortado a cuchillo, con pan tostado' },
  { name: 'Boquerones en vinagre', price: '6€', description: 'Frescos del día, con ajo y perejil' },
  { name: 'Patatas bravas', price: '5€', description: 'Con salsa brava casera' },
  { name: 'Croquetas de jamón', price: '7€', description: '4 unidades, bechamel cremosa' },
  { name: 'Pulpo a la gallega', price: '14€', description: 'Con patatas, pimentón y aceite' },
  { name: 'Tortilla española', price: '6€', description: 'Jugosa, con cebolla' }
];

const raciones = [
  { name: 'Fritura de pescado', price: '16€', description: 'Boquerones, sardinas y calamares' },
  { name: 'Paella marinera', price: '18€', description: 'Para 2 personas, arroz bomba' },
  { name: 'Secreto ibérico', price: '15€', description: 'A la plancha con pimientos' },
  { name: 'Tabla de quesos', price: '12€', description: 'Manchego, cabrales y membrillo' },
  { name: 'Ensaladilla rusa', price: '8€', description: 'Receta de la abuela' }
];

const MenuComida = () => {
  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-2">Carta de Comida</h1>
          <p className="text-muted-foreground">Tapas clásicas y raciones para compartir</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-2 text-ocean">
                <Utensils className="w-5 h-5" />
                <CardTitle>Tapas Clásicas</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {tapasClasicas.map((item, index) => (
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

          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-2 text-ocean">
                <Utensils className="w-5 h-5" />
                <CardTitle>Raciones</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {raciones.map((item, index) => (
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
      </div>
    </section>
  );
};

export default MenuComida;

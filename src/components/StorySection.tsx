import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Waves } from 'lucide-react';
import logoImage from '@/assets/el-carajo-logo.jpg';

const StorySection = () => {
  const timeline = [
    {
      year: '2018',
      title: 'El Sueño Comienza',
      description: 'Todo empezó con una idea loca: abrir un bar donde la gente se sintiera como en casa, pero con vistas al mar.',
      icon: <Waves className="w-6 h-6" />
    },
    {
      year: '2019',
      title: 'Primeros Pasos',
      description: 'Encontramos este rincón perfecto y comenzamos a darle forma a nuestro sueño, pintando mapas y coleccionando barcos.',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      year: '2020',
      title: 'Abrimos las Puertas',
      description: 'A pesar de los tiempos difíciles, abrimos con una promesa: la mejor cerveza fría y las tapas más auténticas.',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section id="historia" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Nuestra Historia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una historia de pasión, mar y buena comida que comenzó con un sueño 
            y se convirtió en el hogar de muchos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                El nombre <span className="font-semibold text-ocean">"El Carajo"</span> surgió 
                de forma espontánea, como las mejores cosas de la vida. Era la expresión que 
                más usábamos cuando alguien preguntaba dónde íbamos a montar nuestro bar soñado: 
                <em>"¡En el carajo!"</em> - decíamos entre risas.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Pero <em>"el carajo"</em> en términos marineros también significa <strong>la cofa</strong>, 
                esa plataforma en lo alto del mástil desde donde los marineros otean el horizonte. 
                Y eso es exactamente lo que queríamos: un lugar desde donde contemplar la vida 
                con perspectiva, rodeados de buena gente.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Cada detalle de nuestro bar tiene su historia. El mapa mundial pintado en la pared 
                representa todos los viajes que soñamos hacer, los barcos de madera son recuerdos 
                de pescadores locales, y cada barril tiene una historia que contar.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center group-hover:bg-ocean-dark transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-ocean">{item.title}</h3>
                      <span className="text-sm bg-sand text-ocean px-2 py-1 rounded">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo and Visual */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-nautical">
              <CardContent className="p-0">
                <img 
                  src={logoImage}
                  alt="Logo El Carajo sobre madera"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>

            {/* Quote Card */}
            <Card className="bg-gradient-sunset border-none shadow-beer">
              <CardContent className="p-6">
                <blockquote className="font-script text-xl text-ocean-dark italic mb-4">
                  "No es solo un bar, es el punto de encuentro donde las historias 
                  del mar se mezclan con los sabores de la tierra"
                </blockquote>
                <cite className="text-sm text-muted-foreground">
                  - Filosofía de El Carajo
                </cite>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <div className="bg-ocean text-white p-6 rounded-lg shadow-nautical">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Dato Curioso
              </h4>
              <p className="text-sm opacity-90">
                Nuestro mapa mundial ha sido firmado por más de 200 viajeros 
                de diferentes países que han pasado por El Carajo. ¡Cada firma 
                cuenta una historia!
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <h3 className="font-script text-2xl text-ocean mb-4">La Historia Continúa</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada día escribimos nuevas páginas de esta historia junto a nuestros clientes. 
              Porque El Carajo no es solo nuestro sueño hecho realidad, es el lugar donde 
              se crean las mejores memorias de quienes nos visitan. 
              <strong className="text-ocean"> ¡Y tu historia aquí apenas está comenzando!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
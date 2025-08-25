import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Heart, Users, MapPin, Clock, Waves } from 'lucide-react';
import barInteriorImage from '@/assets/bar-interior.jpg';
import logoImage from '@/assets/el-carajo-logo.jpg';

const AboutUsSection = () => {
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

        {/* Second Section: Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo and Visual */}
          <div className="space-y-6 order-2 lg:order-1">
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

          {/* Story Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h3 className="font-script text-4xl font-bold text-ocean">
              Nuestra Historia
            </h3>
            
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
                      <h4 className="font-semibold text-ocean">{item.title}</h4>
                      <span className="text-sm bg-sand text-ocean px-2 py-1 rounded">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
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

export default AboutUsSection;
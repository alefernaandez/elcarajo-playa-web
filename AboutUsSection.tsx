import { Card, CardContent } from '@/components/ui/card';
import { Anchor, Heart, Users, MapPin, Clock, Waves } from 'lucide-react';
import barInteriorImage from '@/assets/bar-interior.jpg';
import logoImage from '@/assets/el-carajo-logo.jpg';

const AboutUsSection = () => {
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
    <section id="nosotros" className="py-32 bg-gradient-to-br from-background via-sand-light/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header with more breathing room */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px bg-ocean w-16"></div>
            <Anchor className="w-8 h-8 text-ocean" />
            <div className="h-px bg-ocean w-16"></div>
          </div>
          <h2 className="font-script text-6xl md:text-7xl font-bold text-ocean mb-8 tracking-wide">
            Nuestra Historia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una historia de pasión, mar y buena comida que comenzó con un sueño 
            y se convirtió en el hogar de muchos
          </p>
        </div>

        {/* Main Story Section with better spacing */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Logo and Visual */}
          <div className="space-y-8 order-2 lg:order-1">
            <Card className="overflow-hidden shadow-2xl border-0 transform hover:scale-[1.02] transition-all duration-500">
              <CardContent className="p-0">
                <img 
                  src={logoImage}
                  alt="Logo El Carajo sobre madera"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>

            {/* Quote Card with creative styling */}
            <Card className="bg-gradient-to-br from-ocean/10 via-sand-light to-ocean/5 border-none shadow-xl backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-ocean/20 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="font-script text-2xl text-ocean-dark font-bold italic mb-6 leading-relaxed">
                  "No es solo un bar, es el punto de encuentro donde las historias 
                  del mar se mezclan con los sabores de la tierra"
                </blockquote>
                <cite className="text-sm text-muted-foreground font-medium">
                  — Filosofía de El Carajo
                </cite>
              </CardContent>
            </Card>
          </div>

          {/* Story Content */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                El nombre <span className="font-semibold text-ocean">"El Carajo"</span> surgió 
                de forma espontánea, como las mejores cosas de la vida. Era la expresión que 
                más usábamos cuando alguien preguntaba dónde íbamos a montar nuestro bar soñado: 
                <em className="text-wood"> "¡En el carajo!"</em> — decíamos entre risas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pero <em className="text-ocean">"el carajo"</em> en términos marineros también significa <strong>la cofa</strong>, 
                esa plataforma en lo alto del mástil desde donde los marineros otean el horizonte. 
                Y eso es exactamente lo que queríamos: un lugar desde donde contemplar la vida 
                con perspectiva, rodeados de buena gente.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada detalle de nuestro bar tiene su historia. El mapa mundial pintado en la pared 
                representa todos los viajes que soñamos hacer, los barcos de madera son recuerdos 
                de pescadores locales, y cada barril tiene una historia que contar.
              </p>
            </div>

            {/* Timeline with enhanced design */}
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-ocean via-ocean-light to-ocean opacity-30"></div>
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 group relative">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ocean-dark to-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex-grow bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft group-hover:shadow-nautical transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="font-semibold text-ocean text-lg">{item.title}</h4>
                      <span className="text-sm bg-gradient-to-r from-sand to-sand-light text-ocean px-3 py-1 rounded-full font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inspiring Quote Section */}
        <div className="text-center mb-24">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
            <div className="text-ocean/20 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            <blockquote className="font-script text-3xl md:text-4xl text-ocean italic leading-relaxed mb-6">
              "En El Carajo no solo sirves una cerveza, creas memorias. 
              Aquí cada atardecer es una excusa perfecta para brindar por la vida."
            </blockquote>
            <cite className="block text-muted-foreground text-lg">— Equipo El Carajo</cite>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Ubicación',
      content: 'Paseo Marítimo, 42\n29620 Torremolinos, Málaga',
      action: 'Ver en mapa'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Horario',
      content: 'Lunes a Domingo\n10:00 - 02:00\nCocina hasta 01:00',
      action: null
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Teléfono',
      content: '+34 952 123 456\nReservas y consultas',
      action: 'Llamar'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: 'Instagram',
      handle: '@elcarajo_bar',
      url: 'https://instagram.com/elcarajo_bar'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: 'Facebook',
      handle: 'El Carajo Bar',
      url: 'https://facebook.com/elcarajo.bar'
    }
  ];

  return (
    <section id="contacto" className="pt-20 pb-28 md:pb-36 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Ubicación y Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Estamos a un paso de la playa, ven que la cerveza ya está fría
          </p>
          
          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-ocean hover:bg-ocean-dark text-white shadow-nautical"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Cómo Llegar
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-wood text-wood hover:bg-wood hover:text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-soft hover:shadow-nautical transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                </div>
                <CardTitle className="text-ocean">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground whitespace-pre-line mb-4">
                  {info.content}
                </p>
                {info.action && (
                  <Button variant="outline" size="sm" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                    {info.action}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <Card className="shadow-nautical overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-80 bg-gradient-to-br from-ocean-light to-ocean flex items-center justify-center relative">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <h3 className="font-script text-2xl mb-2">El Carajo</h3>
                  <p className="text-sm opacity-90">Paseo Marítimo, 42</p>
                  <p className="text-sm opacity-90">Torremolinos, Málaga</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </CardContent>
          </Card>

          {/* Information & Social */}
          <div className="space-y-8">
            {/* Location Info */}
            <div>
              <h3 className="font-script text-3xl text-ocean mb-4">
                Cómo Encontrarnos
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ocean" />
                  A 50 metros de la playa de Torremolinos
                </p>
                <p className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-ocean" />
                  Junto al chiringuito La Marea
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-ocean" />
                  Abierto todos los días del año
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-script text-2xl text-ocean mb-4">
                Síguenos en Redes Sociales
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-sand hover:bg-sand hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="text-ocean group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Special Message */}
            <Card className="bg-gradient-sunset border-none shadow-beer">
              <CardContent className="p-6">
                <h4 className="font-script text-xl text-ocean-dark mb-3">
                  Mensaje Especial
                </h4>
                <p className="text-muted-foreground italic">
                  "No somos solo un bar, somos tu segunda casa frente al mar. 
                  Aquí siempre hay una silla libre y una sonrisa esperándote."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-ocean text-white p-8 rounded-xl shadow-nautical max-w-2xl mx-auto">
            <h3 className="font-script text-2xl mb-4">¿Vienes Hoy?</h3>
            <p className="mb-6 opacity-90">
              Las mejores mesas son las que se llenan de risas. 
              Te esperamos para crear nuevos recuerdos juntos.
            </p>
            <Button 
              size="lg"
              className="bg-wood hover:bg-wood-dark text-white shadow-beer"
            >
              Ver Carta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Phone, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horarios',
      subtitle: 'Siempre abiertos para ti',
      content: ['Lunes a Jueves: 12:00 - 01:00', 'Viernes y Sábado: 12:00 - 02:00', 'Domingo: 12:00 - 00:30'],
      note: 'Cocina cierra 1h antes'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Reservas',
      subtitle: 'Llámanos o escríbenos',
      content: ['+34 952 123 456', 'WhatsApp: +34 666 789 012', 'hola@elcarajo.com'],
      note: 'Respuesta rápida garantizada'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-8 h-8" />,
      name: 'Instagram',
      handle: '@elcarajofuengirola',
      description: 'Fotos de nuestros platos y el ambiente marino',
      url: 'https://instagram.com/elcarajofuengirola',
      color: 'bg-gradient-to-r from-pink-500 to-purple-600'
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      name: 'Facebook',
      handle: 'El Carajo Fuengirola',
      description: 'Eventos, noticias y la vida del bar',
      url: 'https://facebook.com/elcarajofuengirola',
      color: 'bg-gradient-to-r from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="contacto" className="py-32 bg-gradient-to-br from-background via-ocean/5 to-sand-light/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px bg-wood w-16"></div>
            <Phone className="w-10 h-10 text-wood" />
            <div className="h-px bg-wood w-16"></div>
          </div>
          <h2 className="font-script text-6xl md:text-7xl font-bold text-ocean mb-8 tracking-wide">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            📱 Ponte en contacto con nosotros para reservas, eventos o simplemente para saludar
          </p>
          
          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-wood to-wood-dark hover:from-wood-dark hover:to-wood text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('tel:+34952123456')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-ocean text-ocean hover:bg-ocean hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://wa.me/34666789012', '_blank')}
            >
              💬 WhatsApp
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-ocean-dark to-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="font-script text-2xl text-ocean mb-2">{info.title}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{info.subtitle}</p>
                    <div className="space-y-2 mb-4">
                      {info.content.map((line, idx) => (
                        <p key={idx} className="text-muted-foreground font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-ocean/70 italic">{info.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
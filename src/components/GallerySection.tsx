import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import barInteriorImage from '@/assets/bar-interior.jpg';
import coldBeerImage from '@/assets/cold-beer.jpg';
import tapasImage from '@/assets/spanish-tapas.jpg';
import heroImage from '@/assets/hero-beach-bar.jpg';

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages = [
    {
      src: barInteriorImage,
      alt: 'Interior del bar con decoración marinera',
      category: 'Interior'
    },
    {
      src: heroImage,
      alt: 'Terraza del bar de playa',
      category: 'Terraza'
    },
    {
      src: coldBeerImage,
      alt: 'Cerveza fría con tapas',
      category: 'Bebidas'
    },
    {
      src: tapasImage,
      alt: 'Tapas españolas tradicionales',
      category: 'Comida'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-ocean mb-4">
            Galería
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre el ambiente único de El Carajo: desde nuestra decoración marinera 
            hasta los platos que nos hacen especiales
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-soft hover:shadow-nautical transition-all duration-300 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0 relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-wood px-2 py-1 rounded text-sm font-medium">
                      {image.category}
                    </span>
                    <p className="mt-2 text-sm opacity-90">{image.alt}</p>
                  </div>
                </div>
                {/* View Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
                onClick={closeLightbox}
              >
                <X size={24} />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </Button>

              {/* Image */}
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                <span className="bg-wood px-2 py-1 rounded text-sm font-medium mr-2">
                  {galleryImages[currentImageIndex].category}
                </span>
                <p className="text-sm mt-1">{galleryImages[currentImageIndex].alt}</p>
                <p className="text-xs opacity-70 mt-1">
                  {currentImageIndex + 1} de {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-script text-2xl text-ocean mb-4">
            Síguenos y Comparte Tu Momento en El Carajo
          </h3>
          <p className="text-muted-foreground mb-6">
            Etiquétanos en tus fotos y forma parte de nuestra galería
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-ocean text-ocean hover:bg-ocean hover:text-white"
            >
              #ElCarajo
            </Button>
            <Button 
              variant="outline" 
              className="border-wood text-wood hover:bg-wood hover:text-white"
            >
              #BarDePlaya
            </Button>
            <Button 
              variant="outline" 
              className="border-ocean-light text-ocean-light hover:bg-ocean-light hover:text-white"
            >
              #TapasAndaluzas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
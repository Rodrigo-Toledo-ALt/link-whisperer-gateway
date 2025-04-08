
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Datos para las diapositivas del carrusel
  const slides = [
    { 
      image: '/placeholder.svg', 
      title: 'Terapia para Pareja', 
      description: 'Dependencia emocional, Celos, Problemas Interpersonales' 
    },
    { 
      image: '/placeholder.svg', 
      title: 'Terapia adolescentes', 
      description: 'Apoyo especializado para jóvenes en etapa de desarrollo' 
    },
    { 
      image: '/placeholder.svg', 
      title: 'Terapia individual', 
      description: 'Atención personalizada para tu bienestar emocional' 
    }
  ];

  // Servicios de psicología
  const services = [
    {
      image: '/placeholder.svg',
      name: 'Terapia Individual',
      description: 'Atención personalizada en un espacio seguro',
      price: 'Desde 60€',
      duration: '50 minutos',
    },
    {
      image: '/placeholder.svg',
      name: 'Terapia de Pareja',
      description: 'Mejora la comunicación y resuelve conflictos',
      price: 'Desde 75€',
      duration: '60 minutos',
    },
    {
      image: '/placeholder.svg',
      name: 'Terapia para Adolescentes',
      description: 'Apoyo especializado para jóvenes',
      price: 'Desde 55€',
      duration: '45 minutos',
    },
    {
      image: '/placeholder.svg',
      name: 'Terapia Online',
      description: 'Atención psicológica desde cualquier lugar',
      price: 'Desde 50€',
      duration: '50 minutos',
    },
    {
      image: '/placeholder.svg',
      name: 'Evaluación Psicológica',
      description: 'Diagnóstico completo y plan de tratamiento',
      price: 'Desde 80€',
      duration: '90 minutos',
    },
    {
      image: '/placeholder.svg',
      name: 'Mindfulness y Gestión del Estrés',
      description: 'Aprende técnicas para reducir la ansiedad',
      price: 'Desde 65€',
      duration: '50 minutos',
    },
  ];

  // Efecto para el autoplay del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top contact bar */}
      <div className="bg-white py-2 px-6 border-b contact-header">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-[#696969]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-medium">623 50 63 22</span>
            </div>
            <div className="hidden md:flex items-center text-[#696969]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>C/Fuenteovejuna, nº8, 41018 Sevilla</span>
            </div>
          </div>
          <a href="https://wa.me/+34623506322" target="_blank" rel="noopener noreferrer" className="whatsapp-button text-white px-4 py-2 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
            </svg>
            Hablamos por WhatsApp
          </a>
        </div>
      </div>
      
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-center">
            TOLEDO GAMERO PSICOLOGÍA
          </h1>
          
          <div className="flex items-center space-x-6">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-gray-300" 
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4 py-8 bg-black bg-opacity-20 rounded-lg max-w-3xl">
                <h2 className="text-4xl font-serif font-semibold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  SOLICITAR CITA
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white opacity-60 hover:opacity-100"
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
        >
          &#10094;
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white opacity-60 hover:opacity-100"
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        >
          &#10095;
        </button>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestros Servicios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 service-grid">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow service-card border border-[#E0CEE0]">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-[#696969]">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-[#696969]">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#C6AAE3] text-[#696969] hover:bg-[#C6AAE3] hover:text-white">MÁS INFO</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Testimonios</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 text-center">
                    <div className="mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-[#C6AAE3]">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                      </svg>
                    </div>
                    <p className="text-lg italic mb-4 text-[#696969]">
                      {index === 0 && "La terapia en Toledo Gamero ha transformado mi vida. Son profesionales excepcionales que te escuchan con atención y te ayudan a encontrar las herramientas para mejorar."}
                      {index === 1 && "Gracias a las sesiones con la psicóloga he conseguido superar mi ansiedad y disfrutar nuevamente de la vida. 100% recomendable."}
                      {index === 2 && "La terapia de pareja nos ha ayudado enormemente a mejorar nuestra comunicación. El ambiente del gabinete es acogedor y profesional."}
                    </p>
                    <p className="font-semibold text-[#A880A8]">
                      {index === 0 && "María G."}
                      {index === 1 && "Carlos P."}
                      {index === 2 && "Laura y Antonio"}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">Contacto</h2>
                <p className="mb-6 text-[#696969]">
                  Estamos aquí para ayudarte. Ponte en contacto con nosotros para programar una cita o resolver cualquier duda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#C6AAE3]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>+34 623 50 63 22</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#C6AAE3]">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>contacto@toledogameropsicologia.es</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#C6AAE3]">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>C/Fuenteovejuna, nº8, 41018 Sevilla</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[#F9F6F9] p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#696969]">Horario de Atención</h3>
                <div className="space-y-2 text-[#696969]">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="w-full bg-[#A880A8] hover:bg-[#96739b]">PEDIR CITA</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#696969] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-serif font-bold mb-4">Toledo Gamero Psicología</h3>
              <p className="max-w-xs">Cuidamos de tu bienestar mental con atención personalizada y profesional.</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Terapia Individual</a></li>
                <li><a href="#" className="hover:underline">Terapia de Pareja</a></li>
                <li><a href="#" className="hover:underline">Terapia para Adolescentes</a></li>
                <li><a href="#" className="hover:underline">Terapia Online</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
            <p>&copy; {new Date().getFullYear()} Toledo Gamero Psicología. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

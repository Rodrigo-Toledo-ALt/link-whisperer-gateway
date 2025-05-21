
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import terapiaOnlineImg from "../../assets/terapiaOnline.jpeg";
import terapiaOnlinePruebasImg from "../../assets/terapiaOnlinePruebas.jpg";

const OnlineTherapy = () => {
  const benefits = [
    "Accesibilidad desde cualquier lugar con conexión a internet",
    "Flexibilidad horaria para adaptarse a tu agenda",
    "Ahorro de tiempo en desplazamientos",
    "Acceso a atención psicológica de calidad independientemente de tu ubicación",
    "Mismo nivel de confidencialidad y profesionalidad que en terapia presencial"
  ];

  const platforms = [
    { name: "Zoom", description: "Plataforma segura con cifrado de extremo a extremo" },
    { name: "Google Meet", description: "Interfaz sencilla y accesible desde cualquier dispositivo" },
    { name: "Skype", description: "Opción familiar para quienes ya utilizan este servicio" },
    { name: "WhatsApp", description: "Para consultas breves o seguimientos puntuales" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center text-[#696969]">Terapia Online</h1>
          <p className="text-lg text-center mb-8 text-[#696969]">
            Atención psicológica profesional desde la comodidad de tu espacio.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">¿Qué es la Terapia Online?</h2>
              <p className="mb-4 text-[#696969]">
                La terapia online es un servicio psicológico profesional que se realiza a través de videollamada, ofreciendo la misma calidad y eficacia que las sesiones presenciales pero con mayor flexibilidad y accesibilidad.
              </p>
              <p className="mb-6 text-[#696969]">
                Con la terapia online podrás acceder a tratamiento psicológico de calidad independientemente de tu ubicación, horarios o circunstancias personales, eliminando barreras que pueden dificultar el acceso a la ayuda profesional.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#696969]">Beneficios de la Terapia Online</h3>
              <ul className="mb-6 space-y-2 text-[#696969]">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={terapiaOnlineImg}
                alt="Terapia Online" 
                className="rounded-lg shadow-md w-full h-auto mb-8"
              />
              
              <div className="border border-[#C6AAE3] rounded-lg p-6 bg-[#F9F6F9]">
                <h3 className="text-xl font-serif font-semibold mb-4 text-[#696969]">Información de Sesiones</h3>
                <div className="space-y-3 text-[#696969]">
                  <div className="flex justify-between">
                    <span className="font-medium">Duración:</span>
                    <span>50 minutos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Frecuencia inicial recomendada:</span>
                    <span>Semanal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Precio:</span>
                    <span>Desde 50€</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-[#A880A8] hover:bg-[#96739b] text-white py-2 px-4 rounded">
                    SOLICITAR CITA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">¿Cómo funciona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C6AAE3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Contacto Inicial</h3>
              <p className="text-[#696969]">
                Solicita tu cita a través de nuestra web, WhatsApp o teléfono. Te responderemos en menos de 24 horas.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C6AAE3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Primera Sesión</h3>
              <p className="text-[#696969]">
                Te enviaremos un enlace para la videollamada y realizaremos una evaluación inicial de tus necesidades.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C6AAE3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Seguimiento</h3>
              <p className="text-[#696969]">
                Estableceremos un plan de tratamiento personalizado y continuaremos con las sesiones según tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Plataformas que utilizamos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-[#C6AAE3]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-[#696969]">{platform.name}</h3>
                  <p className="text-[#696969]">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Consejos para tus sesiones online</h2>
          
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src={terapiaOnlinePruebasImg}
                alt="Consejos para terapia online" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-4 text-[#696969]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Busca un espacio tranquilo y privado donde te sientas cómodo/a para hablar.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Asegúrate de tener una buena conexión a internet para evitar interrupciones.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Utiliza auriculares para mejorar la calidad del audio y garantizar la confidencialidad.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Conectate unos minutos antes para asegurarte de que todo funciona correctamente.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Prepárate como lo harías para una sesión presencial: ten agua cerca y evita distracciones.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-6 bg-[#A880A8] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Listo para comenzar tu terapia online?</h2>
          <p className="mb-6">
            Contacta con nosotros hoy mismo para programar tu primera sesión o resolver cualquier duda.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#A880A8] hover:bg-[#F9F6F9] px-6 py-2 rounded">
              PEDIR CITA
            </button>
            <button className="border border-white hover:bg-white hover:text-[#A880A8] px-6 py-2 rounded transition-colors">
              LLAMAR AHORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTherapy;

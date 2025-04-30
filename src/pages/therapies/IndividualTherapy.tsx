
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const IndividualTherapy = () => {
  const benefits = [
    "Tratamiento personalizado para tus necesidades específicas",
    "Espacio seguro y confidencial para explorar tus pensamientos y emociones",
    "Desarrollo de herramientas para afrontar situaciones difíciles",
    "Mejora de la autoestima y el autoconocimiento",
    "Reducción de síntomas de ansiedad, estrés o depresión"
  ];

  const concerns = [
    { name: "Ansiedad", description: "Tratamiento para trastornos de ansiedad, ataques de pánico y fobias" },
    { name: "Depresión", description: "Ayuda para superar estados depresivos y recuperar la motivación" },
    { name: "Autoestima", description: "Trabajo para mejorar la percepción de uno mismo y desarrollar confianza" },
    { name: "Estrés", description: "Técnicas para gestionar el estrés y prevenir el agotamiento" },
    { name: "Duelo", description: "Acompañamiento en procesos de pérdida y elaboración del duelo" },
    { name: "Trauma", description: "Terapia especializada para la superación de experiencias traumáticas" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center text-[#696969]">Terapia Individual</h1>
          <p className="text-lg text-center mb-8 text-[#696969]">
            Un espacio seguro y personalizado para tu crecimiento emocional y bienestar psicológico.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">¿Qué es la Terapia Individual?</h2>
              <p className="mb-4 text-[#696969]">
                La terapia individual es un proceso colaborativo entre el terapeuta y el cliente, diseñado para abordar problemas específicos, cambiar patrones de comportamiento que causan dificultades, mejorar las relaciones y desarrollar habilidades para manejar situaciones difíciles.
              </p>
              <p className="mb-6 text-[#696969]">
                En nuestras sesiones, trabajaremos juntos para identificar los obstáculos que te impiden alcanzar tus objetivos y desarrollar estrategias efectivas para superarlos. Utilizamos un enfoque integrador, adaptando las técnicas terapéuticas a tus necesidades específicas.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#696969]">Beneficios de la Terapia Individual</h3>
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
                src="/src/assets/terapiaIndividual2.jpg"
                alt="Terapia Individual" 
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
                    <span>Desde 60€</span>
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

      {/* Common Concerns */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">¿Qué Podemos Tratar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concerns.map((concern, index) => (
              <Card key={index} className="border-[#C6AAE3]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-[#696969]">{concern.name}</h3>
                  <p className="text-[#696969]">{concern.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestro Enfoque</h2>
          
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src="/src/assets/terapiaIndividual.png"
                alt="Nuestro enfoque terapéutico" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-[#696969]">
                En Toledo Gamero Psicología utilizamos un enfoque integrador, combinando técnicas de terapia cognitivo-conductual, terapia humanista y mindfulness, adaptando nuestra metodología a las necesidades específicas de cada persona.
              </p>
              <p className="mb-4 text-[#696969]">
                Creemos en la importancia de establecer una relación terapéutica basada en la confianza, el respeto y la empatía, creando un espacio seguro donde puedas explorar tus pensamientos y emociones sin juicios.
              </p>
              <p className="text-[#696969]">
                Nuestro objetivo es acompañarte en tu proceso de autoconocimiento y crecimiento personal, proporcionándote las herramientas necesarias para afrontar los desafíos de la vida y desarrollar todo tu potencial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-6 bg-[#A880A8] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Listo para dar el primer paso?</h2>
          <p className="mb-6">
            Contáctanos hoy mismo para programar tu primera sesión o resolver cualquier duda que tengas.
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

export default IndividualTherapy;

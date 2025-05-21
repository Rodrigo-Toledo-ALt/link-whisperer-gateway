
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import terapiaParejaImg from "../../assets/terapiaPareja2.jpg";
import terapiaParejaPngImg from "../../assets/terapiaPareja.png";

const CoupleTherapy = () => {
  const benefits = [
    "Mejora la comunicación efectiva entre ambos miembros de la pareja",
    "Identifica y resuelve patrones destructivos de relación",
    "Recupera la confianza y la intimidad en la relación",
    "Aprende a gestionar conflictos de forma constructiva",
    "Fortalece el vínculo emocional y renueva la conexión"
  ];

  const concerns = [
    { name: "Problemas de Comunicación", description: "Aprender a expresarse y escuchar de manera efectiva" },
    { name: "Infidelidad", description: "Proceso de recuperación de la confianza y reconstrucción de la relación" },
    { name: "Crisis de Pareja", description: "Apoyo en momentos difíciles y decisiones importantes" },
    { name: "Celos y Desconfianza", description: "Trabajo en la seguridad emocional y la gestión de inseguridades" },
    { name: "Problemas de Intimidad", description: "Recuperación de la conexión emocional y física" },
    { name: "Preparación para la Convivencia", description: "Herramientas para iniciar una vida en común exitosa" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center text-[#696969]">Terapia de Pareja</h1>
          <p className="text-lg text-center mb-8 text-[#696969]">
            Reconstruye, fortalece y haz crecer tu relación con ayuda profesional especializada.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">¿Qué es la Terapia de Pareja?</h2>
              <p className="mb-4 text-[#696969]">
                La terapia de pareja es un proceso donde ambos miembros de la relación trabajan junto a un profesional para identificar y resolver conflictos, mejorar la comunicación y reconstruir su vínculo emocional en un espacio seguro y neutral.
              </p>
              <p className="mb-6 text-[#696969]">
                En nuestras sesiones, trabajamos con diferentes técnicas terapéuticas para ayudaros a entender los patrones que están afectando vuestra relación y desarrollar nuevas formas de interacción que fomenten una conexión más profunda y satisfactoria.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#696969]">Beneficios de la Terapia de Pareja</h3>
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
                src={terapiaParejaImg}
                alt="Terapia de Pareja" 
                className="rounded-lg shadow-md w-full h-auto mb-8"
              />
              
              <div className="border border-[#C6AAE3] rounded-lg p-6 bg-[#F9F6F9]">
                <h3 className="text-xl font-serif font-semibold mb-4 text-[#696969]">Información de Sesiones</h3>
                <div className="space-y-3 text-[#696969]">
                  <div className="flex justify-between">
                    <span className="font-medium">Duración:</span>
                    <span>60 minutos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Frecuencia inicial recomendada:</span>
                    <span>Semanal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Precio:</span>
                    <span>Desde 75€</span>
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
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">¿En qué podemos ayudaros?</h2>
          
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
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestro Método</h2>
          
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src={terapiaParejaPngImg}
                alt="Nuestro método terapéutico" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-[#696969]">
                Nuestro enfoque en terapia de pareja se basa en modelos terapéuticos que han demostrado su eficacia, como la Terapia Focalizada en las Emociones (EFT) y la Terapia Cognitivo-Conductual para Parejas.
              </p>
              <p className="mb-4 text-[#696969]">
                Trabajamos para crear un espacio seguro donde ambos miembros de la pareja puedan expresarse libremente, ser escuchados y validados en sus necesidades y emociones.
              </p>
              <p className="text-[#696969]">
                Nuestro objetivo es ayudaros a reconstruir vuestro vínculo emocional, mejorar los patrones de comunicación y desarrollar habilidades para resolver conflictos de manera constructiva, fortaleciendo así vuestra relación a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-6 bg-[#A880A8] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Queréis dar el primer paso juntos?</h2>
          <p className="mb-6">
            Contactad con nosotros hoy mismo para programar vuestra primera sesión o resolver cualquier duda que tengáis.
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

export default CoupleTherapy;

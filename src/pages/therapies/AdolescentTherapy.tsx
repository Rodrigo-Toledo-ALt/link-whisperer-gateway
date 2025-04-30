
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AdolescentTherapy = () => {
  const benefits = [
    "Espacio seguro y de confianza adaptado a adolescentes",
    "Desarrollo de habilidades de comunicación y expresión emocional",
    "Mejora de la autoestima y la confianza",
    "Técnicas para gestionar el estrés académico y social",
    "Fortalecimiento de relaciones familiares y con iguales"
  ];

  const concerns = [
    { name: "Ansiedad y Estrés", description: "Técnicas para manejar la presión académica y social" },
    { name: "Problemas de Autoestima", description: "Trabajo para fortalecer la imagen y valoración personal" },
    { name: "Conflictos Familiares", description: "Mejora de la comunicación y relación con padres y hermanos" },
    { name: "Acoso Escolar", description: "Apoyo y herramientas para hacer frente al bullying" },
    { name: "Uso Problemático de Tecnología", description: "Gestión saludable de redes sociales y dispositivos" },
    { name: "Orientación Vocacional", description: "Acompañamiento en la toma de decisiones de futuro" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center text-[#696969]">Terapia para Adolescentes</h1>
          <p className="text-lg text-center mb-8 text-[#696969]">
            Acompañamiento especializado para jóvenes en una etapa crucial de desarrollo.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">¿Qué es la Terapia para Adolescentes?</h2>
              <p className="mb-4 text-[#696969]">
                La terapia para adolescentes es un espacio seguro y confidencial donde los jóvenes pueden expresar sus preocupaciones, explorar sus emociones y desarrollar habilidades que les ayuden a navegar los desafíos propios de esta etapa vital.
              </p>
              <p className="mb-6 text-[#696969]">
                Nuestro enfoque está especialmente adaptado para conectar con los adolescentes, utilizando un lenguaje cercano y metodologías que respetan su autonomía y promueven su participación activa en el proceso terapéutico.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#696969]">Beneficios de la Terapia para Adolescentes</h3>
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
                src="/src/assets/terapiaAdolescentes.png"
                alt="Terapia para Adolescentes" 
                className="rounded-lg shadow-md w-full h-auto mb-8"
              />
              
              <div className="border border-[#C6AAE3] rounded-lg p-6 bg-[#F9F6F9]">
                <h3 className="text-xl font-serif font-semibold mb-4 text-[#696969]">Información de Sesiones</h3>
                <div className="space-y-3 text-[#696969]">
                  <div className="flex justify-between">
                    <span className="font-medium">Duración:</span>
                    <span>45 minutos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Frecuencia inicial recomendada:</span>
                    <span>Semanal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Precio:</span>
                    <span>Desde 55€</span>
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
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">¿Cómo podemos ayudar?</h2>
          
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

      {/* For Parents Section */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Para Padres y Madres</h2>
          
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src="/src/assets/terapiapadres.jpeg"
                alt="Información para padres" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-[#696969]">
                Entendemos que como padres podéis sentiros preocupados o inseguros sobre cómo ayudar a vuestro hijo/a adolescente. En Toledo Gamero Psicología ofrecemos también sesiones de orientación para padres.
              </p>
              <p className="mb-4 text-[#696969]">
                Estas sesiones os proporcionan herramientas para mejorar la comunicación con vuestro hijo/a, entender mejor los cambios por los que está pasando y apoyarle de manera efectiva en su proceso de desarrollo.
              </p>
              <p className="text-[#696969]">
                Nuestro enfoque respeta la confidencialidad del adolescente al mismo tiempo que fomenta la implicación familiar en el proceso terapéutico, buscando siempre el equilibrio que mejor se adapte a cada situación particular.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-6 bg-[#A880A8] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Necesitáis ayuda con vuestro adolescente?</h2>
          <p className="mb-6">
            Contactad con nosotros hoy mismo para programar una primera sesión o resolver cualquier duda.
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

export default AdolescentTherapy;

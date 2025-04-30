
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PsychologicalEvaluation = () => {
  const benefits = [
    "Diagnóstico preciso basado en evidencia científica",
    "Comprensión profunda de las dificultades y fortalezas",
    "Plan de tratamiento personalizado y efectivo",
    "Identificación temprana de posibles trastornos",
    "Recomendaciones específicas para mejorar la calidad de vida"
  ];

  const evaluationTypes = [
    { name: "Evaluación Cognitiva", description: "Análisis de capacidades intelectuales, atención, memoria y otras funciones cognitivas" },
    { name: "Evaluación de Personalidad", description: "Exploración de rasgos, patrones de comportamiento y posibles trastornos de personalidad" },
    { name: "Evaluación Neuropsicológica", description: "Valoración de las funciones cerebrales y su relación con el comportamiento y las emociones" },
    { name: "Evaluación Infantil", description: "Análisis del desarrollo, aprendizaje y comportamiento en niños y adolescentes" },
    { name: "Evaluación de Ansiedad y Depresión", description: "Medición de síntomas y severidad de trastornos emocionales comunes" },
    { name: "Evaluación para Informes", description: "Elaboración de informes psicológicos para ámbitos educativos, legales o laborales" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center text-[#696969]">Evaluación Psicológica</h1>
          <p className="text-lg text-center mb-8 text-[#696969]">
            Diagnóstico profesional y plan de intervención personalizado basado en evidencia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">¿Qué es la Evaluación Psicológica?</h2>
              <p className="mb-4 text-[#696969]">
                La evaluación psicológica es un proceso científico que permite valorar el funcionamiento cognitivo, emocional y conductual de una persona mediante entrevistas, observación y tests estandarizados.
              </p>
              <p className="mb-6 text-[#696969]">
                Este proceso nos proporciona información valiosa para establecer un diagnóstico preciso, identificar fortalezas y áreas de mejora, y diseñar un plan de intervención personalizado y efectivo.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#696969]">Beneficios de la Evaluación Psicológica</h3>
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
                src="/placeholder.svg" 
                alt="Evaluación Psicológica" 
                className="rounded-lg shadow-md w-full h-auto mb-8"
              />
              
              <div className="border border-[#C6AAE3] rounded-lg p-6 bg-[#F9F6F9]">
                <h3 className="text-xl font-serif font-semibold mb-4 text-[#696969]">Información de Sesiones</h3>
                <div className="space-y-3 text-[#696969]">
                  <div className="flex justify-between">
                    <span className="font-medium">Duración del proceso:</span>
                    <span>2-3 sesiones</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duración de cada sesión:</span>
                    <span>90 minutos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Precio:</span>
                    <span>Desde 80€/sesión</span>
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

      {/* Types of Evaluation */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Tipos de Evaluación</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evaluationTypes.map((type, index) => (
              <Card key={index} className="border-[#C6AAE3]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-[#696969]">{type.name}</h3>
                  <p className="text-[#696969]">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestro Proceso de Evaluación</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C6AAE3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Entrevista Inicial</h3>
              <p className="text-[#696969]">
                Recogemos información sobre el motivo de consulta, historial clínico y personal, y establecemos los objetivos de la evaluación.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C6AAE3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Aplicación de Pruebas</h3>
              <p className="text-[#696969]">
                Realizamos una selección de tests psicológicos validados científicamente según las necesidades específicas del caso.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#C6AAE3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Devolución y Plan</h3>
              <p className="text-[#696969]">
                Presentamos los resultados, explicamos el diagnóstico y proponemos un plan de intervención personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Section */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Informes Psicológicos</h2>
          
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src="/placeholder.svg" 
                alt="Informes Psicológicos" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-[#696969]">
                Como parte del proceso de evaluación, ofrecemos la posibilidad de elaborar informes psicológicos detallados que pueden ser utilizados en diversos ámbitos:
              </p>
              <ul className="space-y-2 text-[#696969]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Informes clínicos para otros profesionales de la salud</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Informes educativos para centros escolares</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Informes para procesos legales o administrativos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Informes para adaptaciones curriculares o laborales</span>
                </li>
              </ul>
              <p className="mt-4 text-[#696969]">
                Todos nuestros informes son elaborados con rigor profesional y siguiendo las normativas éticas y legales vigentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-6 bg-[#A880A8] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Necesitas una evaluación psicológica?</h2>
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

export default PsychologicalEvaluation;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MindfulnessTherapy = () => {
  const benefits = [
    "Reducción significativa de los niveles de estrés y ansiedad",
    "Mayor capacidad de concentración y claridad mental",
    "Mejora del descanso y la calidad del sueño",
    "Desarrollo de una mayor conciencia emocional",
    "Fortalecimiento del sistema inmunológico y bienestar general"
  ];

  const techniques = [
    { name: "Meditación Consciente", description: "Prácticas guiadas para entrenar la atención plena y la observación sin juicio" },
    { name: "Respiración Consciente", description: "Técnicas de respiración para regular el sistema nervioso y calmar la mente" },
    { name: "Body Scan", description: "Exploración corporal para reconectar con las sensaciones físicas y liberar tensiones" },
    { name: "Mindfulness Informal", description: "Prácticas para integrar la atención plena en actividades cotidianas" },
    { name: "Técnicas de Relajación", description: "Métodos específicos para reducir la tensión muscular y mental" },
    { name: "Gestión Cognitiva del Estrés", description: "Herramientas para identificar y modificar patrones de pensamiento estresantes" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center text-[#696969]">Mindfulness y Gestión del Estrés</h1>
          <p className="text-lg text-center mb-8 text-[#696969]">
            Aprende a vivir el presente con mayor conciencia y reduce la ansiedad en tu vida diaria.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-[#696969]">¿Qué es el Mindfulness?</h2>
              <p className="mb-4 text-[#696969]">
                El mindfulness o atención plena es una práctica basada en la meditación que consiste en prestar atención de manera consciente al momento presente, sin juzgar, aceptando las experiencias tal y como son.
              </p>
              <p className="mb-6 text-[#696969]">
                Esta poderosa herramienta, con evidencia científica creciente, nos ayuda a reducir el estrés, la ansiedad y a mejorar nuestra calidad de vida, conectándonos con el aquí y ahora de manera más plena y satisfactoria.
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#696969]">Beneficios del Mindfulness</h3>
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
                src="/src/assets/mindfullness.png"
                alt="Mindfulness y Gestión del Estrés" 
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
                    <span className="font-medium">Formato:</span>
                    <span>Individual o Grupal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Precio:</span>
                    <span>Desde 65€</span>
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

      {/* Techniques */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Técnicas que Enseñamos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="border-[#C6AAE3]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-[#696969]">{technique.name}</h3>
                  <p className="text-[#696969]">{technique.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestros Programas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-[#C6AAE3] rounded-lg overflow-hidden">
              <div className="h-48 bg-[#F9F6F9] flex items-center justify-center">
                <h3 className="text-2xl font-serif font-semibold text-[#696969]">Individual</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-[#696969]">
                  Programa personalizado según tus necesidades específicas, adaptando las técnicas y prácticas a tu situación particular.
                </p>
                <ul className="mb-6 space-y-2 text-[#696969]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>8 sesiones de 50 minutos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Material de apoyo personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Seguimiento individualizado</span>
                  </li>
                </ul>
                <button className="w-full bg-[#A880A8] hover:bg-[#96739b] text-white py-2 px-4 rounded">
                  RESERVAR PLAZA
                </button>
              </div>
            </div>
            
            <div className="border border-[#C6AAE3] rounded-lg overflow-hidden">
              <div className="h-48 bg-[#F9F6F9] flex items-center justify-center">
                <h3 className="text-2xl font-serif font-semibold text-[#696969]">Grupal</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-[#696969]">
                  Programa en grupos reducidos (máximo 8 personas) que combina la práctica compartida con el enriquecimiento de la experiencia grupal.
                </p>
                <ul className="mb-6 space-y-2 text-[#696969]">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>8 sesiones semanales de 90 minutos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Material y audios de prácticas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C6AAE3] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Comunidad de apoyo</span>
                  </li>
                </ul>
                <button className="w-full bg-[#A880A8] hover:bg-[#96739b] text-white py-2 px-4 rounded">
                  VER PRÓXIMAS FECHAS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Lo que dicen nuestros clientes</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="italic mb-4 text-[#696969]">
                "El programa de mindfulness ha cambiado completamente mi forma de afrontar el estrés. He aprendido a observar mis pensamientos sin dejar que me controlen y ahora disfruto mucho más del momento presente."
              </p>
              <p className="font-semibold text-right text-[#A880A8]">— María L.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="italic mb-4 text-[#696969]">
                "Después de años lidiando con la ansiedad, las técnicas de mindfulness me han dado herramientas prácticas para gestionarla. Mi calidad de vida ha mejorado enormemente y duermo mucho mejor."
              </p>
              <p className="font-semibold text-right text-[#A880A8]">— Carlos R.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-6 bg-[#A880A8] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">¿Quieres aprender a reducir tu estrés?</h2>
          <p className="mb-6">
            Contacta con nosotros hoy mismo para más información sobre nuestros programas o para reservar tu plaza.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#A880A8] hover:bg-[#F9F6F9] px-6 py-2 rounded">
              SOLICITAR INFO
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

export default MindfulnessTherapy;

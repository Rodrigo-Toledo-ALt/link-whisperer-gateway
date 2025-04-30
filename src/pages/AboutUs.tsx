
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dra. Laura Toledo Gamero",
      title: "Psicóloga Clínica",
      bio: "Especialista en terapia cognitivo-conductual con más de 15 años de experiencia ayudando a personas a superar problemas de ansiedad, depresión y relaciones interpersonales.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Carlos Martínez",
      title: "Psicólogo Infantil y Adolescente",
      bio: "Experto en el desarrollo infantil y problemas de comportamiento en adolescentes, con formación especializada en terapia de juego y técnicas de intervención familiar.",
      image: "/placeholder.svg"
    },
    {
      name: "Dra. Ana Sánchez",
      title: "Psicóloga de Parejas",
      bio: "Terapeuta especializada en relaciones de pareja, con formación en terapia sistémica y emotivo-conductual para la resolución de conflictos y mejora de la comunicación.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F9F6F9] py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#696969]">Sobre Nosotros</h1>
          <p className="text-lg mb-8 text-[#696969]">
            En Toledo Gamero Psicología estamos comprometidos con tu bienestar emocional. Nuestro equipo de profesionales altamente cualificados te acompaña en tu camino hacia una vida más plena y satisfactoria.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src="/placeholder.svg" 
                alt="Nuestra misión" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-semibold mb-4 text-[#696969]">Nuestra Misión</h2>
              <p className="mb-4 text-[#696969]">
                Nuestra misión es proporcionar una atención psicológica de calidad, personalizada y basada en evidencia científica, que ayude a nuestros clientes a superar sus dificultades y alcanzar su máximo potencial.
              </p>
              <p className="mb-4 text-[#696969]">
                Creemos firmemente en el poder de la terapia como herramienta transformadora y en la capacidad de cada persona para crecer y desarrollarse, independientemente de sus circunstancias.
              </p>
              <p className="text-[#696969]">
                Trabajamos con cada paciente de manera individualizada, respetando su ritmo y necesidades específicas, y estableciendo objetivos terapéuticos claros y alcanzables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 px-6 bg-[#F9F6F9]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#C6AAE3]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Profesionalidad</h3>
                <p className="text-[#696969]">
                  Trabajamos con rigor científico y actualización constante para ofrecer las mejores intervenciones basadas en evidencia.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-[#C6AAE3]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Empatía</h3>
                <p className="text-[#696969]">
                  Nos comprometemos a entender tu experiencia desde tu perspectiva, sin juicios y con total respeto a tu individualidad.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-[#C6AAE3]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-[#696969]">Confidencialidad</h3>
                <p className="text-[#696969]">
                  Garantizamos la absoluta privacidad y protección de la información compartida durante el proceso terapéutico.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#696969]">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-[#696969]">{member.name}</h3>
                <p className="text-[#A880A8] mb-3">{member.title}</p>
                <p className="text-[#696969]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

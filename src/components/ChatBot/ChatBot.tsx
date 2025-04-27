
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import ChatMessage from './ChatMessage';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('openai_key') || "");
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      text: message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "Eres un asistente amable y profesional de Toledo Gamero Psicología. Tu objetivo es ayudar a los usuarios con consultas sobre servicios psicológicos, programación de citas y soporte general. Mantén tus respuestas concisas y empáticas."
            },
            {
              role: "user",
              content: message
            }
          ],
          max_tokens: 150
        }),
      });

      const data = await response.json();
      
      const botMessage: Message = {
        text: data.choices[0].message.content,
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        text: "Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta de nuevo más tarde.",
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('openai_key', apiKey);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-[#A880A8] hover:bg-[#96739b] shadow-lg"
      >
        <MessageCircle />
      </Button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[350px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
          <div className="bg-[#A880A8] text-white p-4 rounded-t-lg">
            <h3 className="font-serif text-lg">Chat con Toledo Gamero</h3>
          </div>

          {!apiKey && (
            <form onSubmit={handleApiKeySubmit} className="p-4 border-b border-gray-200">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Ingresa tu clave de API de OpenAI:</label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-[#A880A8] hover:bg-[#96739b]">
                    Guardar
                  </Button>
                </div>
              </div>
            </form>
          )}

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isBot={msg.isBot}
                timestamp={msg.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1"
              />
              <Button 
                type="submit" 
                className="bg-[#A880A8] hover:bg-[#96739b]"
                disabled={!apiKey}
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;

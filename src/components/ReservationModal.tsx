
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ticket } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState({ name: '', whatsapp: '' });

  const validateWhatsApp = (phone: string) => {
    // Remove todos os caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '');
    // Verifica se tem pelo menos 10 dígitos (formato brasileiro mínimo)
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
  };

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    
    // Remove erro quando o usuário começar a digitar
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: '' }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    
    // Remove erro quando o usuário começar a digitar
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handleReservation = () => {
    const newErrors = { name: '', whatsapp: '' };
    
    // Validação do nome
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    // Validação do WhatsApp
    if (!whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (!validateWhatsApp(whatsapp)) {
      newErrors.whatsapp = 'Número de WhatsApp inválido';
    }
    
    // Se há erros, mostra eles e não prossegue
    if (newErrors.name || newErrors.whatsapp) {
      setErrors(newErrors);
      return;
    }
    
    // Se chegou aqui, todos os campos são válidos
    console.log('Dados válidos:', { name, whatsapp });
    window.location.href = 'https://sun.eduzz.com/D0RA8P5J9Y';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="bg-[url(/img-uploads/logoToHero.png)] ..." style={{backgroundSize: 'cover', margin: 'auto', width: '210px', height: '70px', backgroundPosition: 'center'}}/>
          <DialogTitle className="text-center text-xl font-bold" style={{ color: '#082144' }}>
            Preencha os dados para prosseguir
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={handleNameChange}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(11) 99999-9999"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              maxLength={15}
              className={errors.whatsapp ? 'border-red-500' : ''}
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm">{errors.whatsapp}</p>
            )}
          </div>
          <Button 
            onClick={handleReservation}
            className="w-full text-white font-bold text-lg px-8 py-6 hover:scale-105 transition-transform shadow-xl rounded-full mt-6"
            style={{ backgroundColor: '#F4A261' }}
          >
            Quero reservar minha vaga
            <Ticket className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;

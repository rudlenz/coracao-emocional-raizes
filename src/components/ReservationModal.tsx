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
import emailjs from '@emailjs/browser';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState({ name: '', whatsapp: '' });

  const validateWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
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
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: '' }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handleReservation = () => {
    const newErrors = { name: '', whatsapp: '' };

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (!validateWhatsApp(whatsapp)) {
      newErrors.whatsapp = 'Número de WhatsApp inválido';
    }

    if (newErrors.name || newErrors.whatsapp) {
      setErrors(newErrors);
      return;
    }

    const templateParams = {
      name,
      whatsapp,
    };

    emailjs.send(
      'service_hl1quxw',
      'template_9wqc55o',  
      templateParams,
      '8FRQNCOUG9ZiCyCC4'
    ).then(() => {
      console.log('E-mail enviado com sucesso!');
      window.location.href = 'https://sun.eduzz.com/D0RA8P5J9Y';
    }).catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar. Tente novamente.');
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {
        onClose();
        setErrors({ name: '', whatsapp: '' });
      }}>
      <DialogContent className="sm:max-w-md bg-white/10 backdrop-blur-md">
        <DialogHeader>
          <div className="bg-[url(/img-uploads/logoToHero.png)] ..." style={{backgroundSize: 'cover', margin: 'auto', width: '210px', height: '70px', backgroundPosition: 'center'}}/>
          <DialogTitle className="text-center text-white text-xl font-bold">
            Preencha os dados para prosseguir
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className='text-white'>Nome completo</Label>
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
            <Label htmlFor="whatsapp" className='text-white'>WhatsApp</Label>
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
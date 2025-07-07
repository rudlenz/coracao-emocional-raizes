
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

  const handleReservation = () => {
    // Redireciona para a página de compra
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="Digite seu WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
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

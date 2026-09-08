'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/5492644999862?text=Hola%20Familia%20Saleme!%20Visité%20su%20sitio%20web%20y%20quisiera%20hacer%20una%20consulta%20sobre%20su%20Aceite%20de%20Oliva%20Virgen%20Extra.';

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <div className="mr-3 hidden sm:flex items-center bg-[#141414]/90 backdrop-blur-md border border-[#C8A96E]/30 text-[#F5F0EB] text-xs font-medium py-2 px-3.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>¡Hacé tu pedido directo por WhatsApp!</span>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Familia Saleme"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C8A96E] text-[9px] font-bold text-black items-center justify-center">
            1
          </span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
}

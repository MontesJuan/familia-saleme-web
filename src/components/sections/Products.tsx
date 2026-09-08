'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Check, ShieldCheck, Sparkles, PackageCheck, Award } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  volume: string;
  description: string;
  badge: string;
  image: string;
  notes: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'botella-500ml',
    name: 'Blend Selección Arbequina & Picual',
    category: 'Presentación Insignia',
    volume: 'Botella 500 ml',
    description:
      'Botella de vidrio oscuro protector con pico dosificador irrellenable. El varietal premiado como Mejor Aceite de Oliva Virgen Extra del País en Caminos y Sabores 2026.',
    badge: '🏆 Mejor AOVE 2026',
    image: '/images/producto_premium.jpg',
    notes: ['Acidez < 0.20%', 'Sin TACC', 'Valle de Pedernal', 'Sello IG San Juan'],
  },
  {
    id: 'caja-6u',
    name: 'Caja Colección x 6 Botellas',
    category: 'Formato Envíos a Todo el País',
    volume: '6x Botellas 500 ml (3 Litros)',
    description:
      'Caja cerrada de 6 unidades con embalaje reforzado y celdas de protección antichoque. Formato ideal para abastecimiento familiar o amantes del virgen extra con envío directo a domicilio.',
    badge: 'Envíos Nacionales',
    image: '/images/product_caja_envios.jpg',
    notes: ['Protección antigolpes', 'Despacho directo de finca', 'Consumo familiar'],
  },
];

export default function Products() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    'botella-500ml': 2,
    'caja-6u': 0,
  });
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  const buildWhatsAppMessage = () => {
    const selectedItems = PRODUCTS.filter((p) => (quantities[p.id] || 0) > 0);
    if (selectedItems.length === 0) return '';

    let text = `Hola Familia Saleme! Visité su sitio web y quisiera encargar el siguiente pedido:\n\n`;

    selectedItems.forEach((p) => {
      text += `• ${quantities[p.id]}x ${p.name} (${p.volume})\n`;
    });

    if (customerName.trim()) {
      text += `\nNombre: ${customerName.trim()}`;
    }
    if (city.trim()) {
      text += `\nCiudad / Provincia: ${city.trim()}`;
    }

    text += `\n\n¿Me indican los medios de pago y el costo de envío? Muchas gracias!`;
    return encodeURIComponent(text);
  };

  const whatsappHref = `https://wa.me/5492644999862?text=${buildWhatsAppMessage()}`;

  return (
    <section id="productos" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4A582E]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Venta Directa desde Finca • San Juan
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Nuestro Aceite Virgen Extra
          </h2>
          <p className="text-sm sm:text-base text-[#DDD6CA] font-light leading-relaxed">
            Elegí la cantidad que necesitás para tu mesa o pedí la caja cerrada para envíos directos a todo el país.
            Coordinamos todo de forma personalizada a través de WhatsApp.
          </p>
        </div>

        {/* 2 Authentic Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 sm:mb-20">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl overflow-hidden bg-[#12150D] border border-[#C8A96E]/30 hover:border-[#C8A96E] transition-all duration-300 flex flex-col justify-between group shadow-2xl"
            >
              {/* Product Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0C08]">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12150D] via-transparent to-black/20" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border border-[#C8A96E]/60 text-[#D4B87A] text-[11px] font-bold uppercase tracking-wider">
                  {prod.badge}
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm text-xs text-white/95 font-mono border border-white/10">
                  {prod.volume}
                </div>
              </div>

              {/* Info & Counter */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A96E] font-semibold block mb-1">
                    {prod.category}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-2xl text-[#F5F0EB] font-normal mb-2 leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDD6CA] font-light leading-relaxed mb-4">{prod.description}</p>

                  {/* Notes pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prod.notes.map((note, nIdx) => (
                      <span
                        key={nIdx}
                        className="px-3 py-1 rounded-full bg-[#1C2214] text-[11px] text-[#D4B87A] border border-[#5A6E35]/30 font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector inside card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#A39B8B] font-medium">Cantidad a encargar:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(prod.id, -1)}
                      disabled={(quantities[prod.id] || 0) === 0}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#F5F0EB] hover:border-[#C8A96E] hover:text-[#C8A96E] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      aria-label={`Restar ${prod.name}`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-mono font-bold text-base text-[#D4B87A]">
                      {quantities[prod.id] || 0}
                    </span>
                    <button
                      onClick={() => updateQuantity(prod.id, 1)}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#F5F0EB] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors"
                      aria-label={`Sumar ${prod.name}`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY STRIP */}
        <div className="rounded-3xl bg-[#12150D] border border-[#C8A96E]/40 p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Cart details & Inputs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A96E] font-semibold block mb-0.5">
                    Resumen del Pedido
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-2xl text-[#F5F0EB]">
                    Selección Personalizada ({totalItems} {totalItems === 1 ? 'unidad' : 'unidades'})
                  </h3>
                </div>
                {totalItems > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A2510] text-[#A9C365] text-xs font-medium border border-[#6B7B3A]/40">
                    <PackageCheck className="w-3.5 h-3.5" />
                    Listo para enviar
                  </span>
                )}
              </div>

              {/* Selected items list */}
              {totalItems === 0 ? (
                <p className="text-xs text-[#A39B8B] italic py-2">
                  No has seleccionado ningún producto aún. Usá los botones (+) arriba para agregar botellas o cajas.
                </p>
              ) : (
                <div className="space-y-2">
                  {PRODUCTS.filter((p) => (quantities[p.id] || 0) > 0).map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-white/5"
                    >
                      <span className="text-[#F5F0EB] font-light">
                        {p.name} <span className="text-[#A39B8B]">({p.volume})</span>
                      </span>
                      <span className="font-mono font-bold text-[#D4B87A]">{quantities[p.id]} un.</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Customer fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#A39B8B] block mb-1">
                    Tu Nombre (Opcional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-[#0A0C08] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#A39B8B] block mb-1">
                    Ciudad / Provincia (Opcional)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ej. San Juan / CABA"
                    className="w-full bg-[#0A0C08] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
                  />
                </div>
              </div>
            </div>

            {/* Right: Direct WhatsApp CTA */}
            <div className="lg:col-span-5 bg-[#0A0C08] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#C8A96E] font-semibold block">
                  Atención Directa
                </span>
                <p className="text-xs text-[#DDD6CA] font-light leading-relaxed">
                  Tu pedido se envía directamente al WhatsApp oficial de Familia Saleme en San Juan para coordinar pago seguro y envío a tu domicilio.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={totalItems > 0 ? whatsappHref : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl ${
                    totalItems > 0
                      ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white hover:scale-[1.02] active:scale-95 shadow-[#25D366]/20'
                      : 'bg-white/10 text-[#A39B8B] cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Pedido por WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#A39B8B] font-light">
                  Se abrirá WhatsApp con el detalle listo para enviar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

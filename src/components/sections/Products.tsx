'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Check, ShieldCheck, Sparkles, PackageCheck, Gift } from 'lucide-react';

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
    category: 'Edición Vidrio Oscuro',
    volume: 'Botella 500 ml',
    description:
      'Nuestra presentación insignia en botella de vidrio oscuro protector con pico vertedor dosificador irrellenable. Ideal para llevar directamente a la mesa.',
    badge: '🏆 Premiado 2026',
    image: '/images/producto_premium.jpg',
    notes: ['Acidez < 0.20%', 'Sin TACC', 'Valle de Pedernal'],
  },
  {
    id: 'envase-metalico',
    name: 'Lata Metálica Gastronómica',
    category: 'Kitchen & Restaurant Format',
    volume: 'Lata Cilíndrica',
    description:
      'Envase metálico cilíndrico con protección absoluta contra rayos UV y calor. Diseñado ergonómicamente para trabajo continuo en cocina profesional y alta gastronomía.',
    badge: 'Gourmet Kitchen',
    image: '/images/product_envase_metalico.jpg',
    notes: ['Light Protection', 'Uso Profesional', 'Valle de Pedernal'],
  },
  {
    id: 'bidon-3l',
    name: 'Reserva Familiar Gastronómica',
    category: 'Formato Cocina & Restaurant',
    volume: 'Bidón 3 Litros',
    description:
      'Envase metálico rectangular de alta resistencia con manija y vertedor hermético. Diseñado para quienes cocinan a diario con aceite virgen extra de máxima calidad.',
    badge: 'Alta Cocina',
    image: '/images/product_3_litros.jpg',
    notes: ['Rendimiento óptimo', 'Cosecha 2026', 'Prensado en frío'],
  },
  {
    id: 'duo-regalo',
    name: 'Estuche Dúo Degustación',
    category: 'Presentación de Autor',
    volume: '2x Botellas 500 ml',
    description:
      'Cofre de madera noble con interior en pana negra resguardando dos botellas de nuestro blend premiado. El regalo gourmet definitivo.',
    badge: 'Cofre de Lujo',
    image: '/images/product_set_duo.jpg',
    notes: ['Cofre de autor', 'Madera & Pana', 'Folleto de cata'],
  },
  {
    id: 'caja-6u',
    name: 'Caja Colección Cava Saleme',
    category: 'Envío Directo a Todo el País',
    volume: '6x Botellas 500 ml',
    description:
      'Caja cerrada de 6 unidades para abastecimiento familiar o amantes del AOVE. Embalaje reforzado con protección antigolpes para envíos a domicilio.',
    badge: 'Más Conveniente',
    image: '/images/product_caja_envios.jpg',
    notes: ['Embalaje seguro', 'Envíos nacionales', 'Precio especial'],
  },
];

export default function Products() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    'botella-500ml': 2,
    'envase-metalico': 0,
    'bidon-3l': 0,
    'duo-regalo': 1,
    'caja-6u': 0,
  });
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [giftNote, setGiftNote] = useState('');

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
      text += `\nCiudad / Localidad: ${city.trim()}`;
    }
    if (giftNote.trim()) {
      text += `\nDedicatoria de regalo: "${giftNote.trim()}"`;
    }

    text += `\n\n¿Me confirmarían disponibilidad y opciones de entrega? Muchas gracias!`;
    return encodeURIComponent(text);
  };

  const whatsappHref = `https://wa.me/5492644999862?text=${buildWhatsAppMessage()}`;

  return (
    <section id="productos" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C8A96E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Colección Finca Pedernal • Venta Directa
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Nuestros Productos & Formatos
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
            Elegí tus presentaciones preferidas. Coordinamos envíos directos desde la almazara en San Juan hacia todo
            el país vía WhatsApp.
          </p>
        </div>

        {/* 5 Product Cards Grid with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-20">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl overflow-hidden bg-[#141414] border border-[#C8A96E]/25 hover:border-[#C8A96E] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Product Photo */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#0D0D0D]">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />

                {/* Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/50 text-[#D4B87A] text-[10px] font-bold uppercase tracking-wider">
                  {prod.badge}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[11px] text-white/90 font-mono">
                  {prod.volume}
                </div>
              </div>

              {/* Info & Counter */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A96E] font-semibold block mb-1">
                    {prod.category}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal mb-2 leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#A39B8B] font-light leading-relaxed mb-3">{prod.description}</p>

                  {/* Notes pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {prod.notes.map((note, nIdx) => (
                      <span
                        key={nIdx}
                        className="px-2.5 py-0.5 rounded-full bg-[#1E1E1E] text-[10px] text-[#D4B87A] border border-white/5"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector inside card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#A39B8B] font-medium">Cantidad:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(prod.id, -1)}
                      disabled={(quantities[prod.id] || 0) === 0}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#F5F0EB] hover:border-[#C8A96E] hover:text-[#C8A96E] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      aria-label={`Restar ${prod.name}`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-mono font-bold text-sm text-[#D4B87A]">
                      {quantities[prod.id] || 0}
                    </span>
                    <button
                      onClick={() => updateQuantity(prod.id, 1)}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#F5F0EB] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors"
                      aria-label={`Sumar ${prod.name}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE "ARMÁ TU PEDIDO" ORDER SUMMARY STRIP (Inspired by Entre Raíces!) */}
        <div className="rounded-3xl bg-[#141414] border border-[#C8A96E]/30 p-6 sm:p-10 shadow-2xl">
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
                  No has seleccionado ningún producto aún. Usá los botones (+) arriba para agregar botellas o estuches.
                </p>
              ) : (
                <div className="space-y-2">
                  {PRODUCTS.filter((p) => (quantities[p.id] || 0) > 0).map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-white/5"
                    >
                      <span className="text-[#F5F0EB] font-light">
                        {p.name} <span className="text-[#A39B8B]">({p.volume})</span>
                      </span>
                      <span className="font-mono font-bold text-[#D4B87A]">{quantities[p.id]} un.</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional customer fields */}
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
                    className="w-full bg-[#0E0E0E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
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
                    className="w-full bg-[#0E0E0E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
                  />
                </div>
              </div>
            </div>

            {/* Right: Dedication & Direct WhatsApp CTA */}
            <div className="lg:col-span-5 bg-[#0E0E0E] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#C8A96E] font-semibold flex items-center gap-1.5 mb-2">
                  <Gift className="w-3.5 h-3.5" />
                  Dedicatoria de regalo (Opcional)
                </label>
                <textarea
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Si es un obsequio, escribí un mensaje para adjuntar en la tarjeta..."
                  rows={2}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl p-3 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E] resize-none"
                />
              </div>

              <div className="space-y-2.5">
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
                  Se abrirá WhatsApp con el detalle listo para coordinar pago y entrega directa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

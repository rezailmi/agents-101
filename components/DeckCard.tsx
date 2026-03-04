'use client';

import Link from 'next/link';
import type { Deck } from '@/lib/types';

const NUMERALS = ['I', 'II', 'III', 'IV'];

export function DeckCard({ deck, index }: { deck: Deck; index: number }) {
  return (
    <Link href={`/deck/${deck.slug}`} className="block group">
      <article
        className="relative h-full p-6 cursor-pointer overflow-hidden transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #1c1c1c 0%, #222222 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px',
          boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.04)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.border = '1px solid rgba(106,171,242,0.3)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            'inset 1px 1px 1px rgba(255,255,255,0.04), 0 0 30px rgba(106,171,242,0.05)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.08)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            'inset 1px 1px 1px rgba(255,255,255,0.04)';
        }}
      >
        {/* Vol number */}
        <div className="flex items-start justify-between mb-8">
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.6)' }}
          >
            Vol. {NUMERALS[index]}
          </span>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>→</span>
        </div>

        {/* Title */}
        <h2
          className="text-2xl italic font-normal mb-3 leading-snug"
          style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
        >
          {deck.title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-xs tracking-[0.15em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.5)' }}
        >
          {deck.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}
        >
          {deck.description}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span
            className="text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
          >
            {deck.slides.length} slides
          </span>
          <span className="btn-aqua" style={{ fontFamily: 'var(--font-mono)' }}>
            Open →
          </span>
        </div>
      </article>
    </Link>
  );
}

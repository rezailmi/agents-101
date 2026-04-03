'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Deck, Slide } from '@/lib/types';

/* ─── Slide layouts ──────────────────────────────────────── */

function TitleSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 stagger">
      <p
        className="text-xs tracking-[0.3em] uppercase mb-8"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.6)' }}
      >
        Introduction
      </p>
      <h1
        className="text-5xl md:text-7xl italic font-normal leading-tight mb-8 max-w-2xl whitespace-pre-line"
        style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
      >
        {slide.headline}
      </h1>
      <div className="h-px w-16 mb-8" style={{ background: 'rgba(106,171,242,0.3)' }} />
      {slide.body && (
        <p
          className="text-base leading-relaxed max-w-lg"
          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.5)' }}
        >
          {slide.body}
        </p>
      )}
    </div>
  );
}

function ConceptSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col justify-center h-full px-10 md:px-20 max-w-3xl mx-auto w-full stagger">
      <p
        className="text-xs tracking-[0.25em] uppercase mb-6"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.5)' }}
      >
        —
      </p>
      <h2
        className="text-4xl md:text-5xl italic font-normal mb-8 leading-snug"
        style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
      >
        {slide.headline}
      </h2>
      <div className="h-px w-8 mb-8" style={{ background: 'rgba(106,171,242,0.25)' }} />
      {slide.body && (
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}
        >
          {slide.body}
        </p>
      )}
    </div>
  );
}

function TwoColSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col justify-center h-full px-10 md:px-16 max-w-5xl mx-auto w-full stagger">
      <h2
        className="text-3xl md:text-4xl italic font-normal mb-8 leading-snug"
        style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
      >
        {slide.headline}
      </h2>
      <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.07)' }} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {slide.left && (
          <div
            className="p-5 rounded-lg"
            style={{
              background: 'rgba(106,171,242,0.04)',
              border: '1px solid rgba(106,171,242,0.12)',
            }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.7)' }}
            >
              {slide.left.heading}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}
            >
              {slide.left.body}
            </p>
          </div>
        )}
        {slide.right && (
          <div
            className="p-5 rounded-lg"
            style={{
              background: 'rgba(106,171,242,0.04)',
              border: '1px solid rgba(106,171,242,0.12)',
            }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.7)' }}
            >
              {slide.right.heading}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}
            >
              {slide.right.body}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function QuoteSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 md:px-20 max-w-3xl mx-auto w-full stagger">
      <span
        className="text-8xl italic font-normal mb-2 leading-none"
        style={{ fontFamily: 'var(--font-display)', color: 'rgba(106,171,242,0.2)' }}
      >
        "
      </span>
      <blockquote
        className="text-xl md:text-2xl italic font-normal leading-relaxed mb-10"
        style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.85)' }}
      >
        {slide.quote}
      </blockquote>
      <div className="h-px w-8 mb-6" style={{ background: 'rgba(106,171,242,0.3)' }} />
      {slide.attribution && (
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}
        >
          {slide.attribution}
        </p>
      )}
    </div>
  );
}

function ListSlide({ slide }: { slide: Slide }) {
  return (
    <div className="flex flex-col justify-center h-full px-10 md:px-20 max-w-4xl mx-auto w-full stagger">
      <h2
        className="text-3xl md:text-4xl italic font-normal mb-8 leading-snug"
        style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
      >
        {slide.headline}
      </h2>
      <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.07)' }} />
      <ul className="space-y-3">
        {slide.items?.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span
              className="mt-0.5 text-xs shrink-0"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.5)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TriangleSlide({ slide }: { slide: Slide }) {
  const [top, left, right] = slide.vertices ?? [];
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 stagger">
      <h2
        className="text-3xl md:text-4xl italic font-normal mb-10 text-center"
        style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
      >
        {slide.headline}
      </h2>

      <div className="relative" style={{ width: 380, height: 320 }}>
        <svg
          viewBox="0 0 380 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          {/* Glow filter */}
          <defs>
            <filter id="cyan-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Triangle edges */}
          <path
            d="M190 32 L44 280 L336 280 Z"
            stroke="rgba(106,171,242,0.35)"
            strokeWidth="1"
            strokeDasharray="5 4"
          />
          {/* Center spokes */}
          <line x1="190" y1="32" x2="190" y2="197" stroke="rgba(106,171,242,0.12)" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="44" y1="280" x2="190" y2="197" stroke="rgba(106,171,242,0.12)" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="336" y1="280" x2="190" y2="197" stroke="rgba(106,171,242,0.12)" strokeWidth="1" strokeDasharray="3 5" />

          {/* Vertex dots */}
          <circle cx="190" cy="32" r="4" fill="#6aabf2" opacity="0.8" />
          <circle cx="44" cy="280" r="4" fill="#6aabf2" opacity="0.8" />
          <circle cx="336" cy="280" r="4" fill="#6aabf2" opacity="0.8" />

          {/* Center dot */}
          <circle cx="190" cy="197" r="5" fill="none" stroke="rgba(106,171,242,0.4)" strokeWidth="1" />
          <circle cx="190" cy="197" r="2" fill="#6aabf2" opacity="0.7" />
        </svg>

        {/* Top — MODEL */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-center">
          <p className="text-xs tracking-[0.25em] font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#6aabf2' }}>
            {top?.label}
          </p>
          <p className="text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
            {top?.description}
          </p>
        </div>

        {/* Bottom-left — HARNESS */}
        <div className="absolute bottom-0 left-0 translate-y-8 text-left" style={{ maxWidth: 110 }}>
          <p className="text-xs tracking-[0.25em] font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#6aabf2' }}>
            {left?.label}
          </p>
          <p className="text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
            {left?.description}
          </p>
        </div>

        {/* Bottom-right — USAGE */}
        <div className="absolute bottom-0 right-0 translate-y-8 text-right" style={{ maxWidth: 110 }}>
          <p className="text-xs tracking-[0.25em] font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#6aabf2' }}>
            {right?.label}
          </p>
          <p className="text-xs mt-0.5" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
            {right?.description}
          </p>
        </div>

        {/* Center — QUALITY */}
        <div className="absolute text-center" style={{ top: '61%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <p className="text-xs tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.7)' }}>
            {slide.center}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide renderer ─────────────────────────────────────── */

function renderSlide(slide: Slide) {
  switch (slide.type) {
    case 'title':    return <TitleSlide slide={slide} />;
    case 'concept':  return <ConceptSlide slide={slide} />;
    case 'two-col':  return <TwoColSlide slide={slide} />;
    case 'quote':    return <QuoteSlide slide={slide} />;
    case 'list':     return <ListSlide slide={slide} />;
    case 'triangle': return <TriangleSlide slide={slide} />;
    default:         return <ConceptSlide slide={slide} />;
  }
}

/* ─── Main viewer ────────────────────────────────────────── */

export default function SlideViewer({ deck }: { deck: Deck }) {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, deck.slides.length - 1));
  }, [deck.slides.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft')                    { e.preventDefault(); goPrev(); }
      if (e.key === 'Escape')                       { window.history.back(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  const slide = deck.slides[index];

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#010101' }}>

      {/* Top bar */}
      <header
        className="flex items-center justify-between px-8 py-4 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Link href="/" className="btn-aqua" style={{ fontFamily: 'var(--font-mono)' }}>
          ← Back
        </Link>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>
          {deck.subtitle}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>
          {index + 1} / {deck.slides.length}
        </p>
      </header>

      {/* Progress bar */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }}>
        <div
          style={{
            height: '100%',
            width: `${((index + 1) / deck.slides.length) * 100}%`,
            background: '#6aabf2',
            transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* Slide */}
      <main className="flex-1 overflow-hidden relative">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(106,171,242,0.04) 0%, transparent 70%)',
          }}
        />
        <div key={`${deck.slug}--${index}`} className="h-full animate-slide-enter">
          {renderSlide(slide)}
        </div>
      </main>

      {/* Bottom nav */}
      <footer
        className="flex items-center justify-between px-8 py-4 flex-shrink-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="btn-aqua-icon"
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Dot indicators */}
        <nav className="flex items-center gap-2">
          {deck.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width:  i === index ? '20px' : '6px',
                height: '6px',
                background: i === index ? '#6aabf2' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </nav>

        <button
          onClick={goNext}
          disabled={index === deck.slides.length - 1}
          className="btn-aqua-icon"
          aria-label="Next slide"
        >
          →
        </button>
      </footer>
    </div>
  );
}

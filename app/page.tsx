'use client';

import { useState } from 'react';
import { DeckCard } from '@/components/DeckCard';
import ComputerWrapper from '@/components/ComputerWrapper';
import { MacMenuBar } from '@/components/MacMenuBar';
import { AsciiClaude, DEFAULT_ASCII_CONFIG } from '@/components/AsciiClaude';
import type { AsciiConfig } from '@/components/AsciiClaude';
import { AsciiControls } from '@/components/AsciiControls';
import { decks } from '@/data/decks';

export default function HomePage() {
  const [asciiConfig, setAsciiConfig] = useState<AsciiConfig>(DEFAULT_ASCII_CONFIG);

  return (
    <div className="min-h-screen" style={{ background: '#010101' }}>

      {/* ── Mac OS X Menu Bar ── */}
      <MacMenuBar />

      {/* ── Hero ── */}
      <header className="relative flex flex-col items-center pt-24 pb-8 px-8 text-center overflow-hidden">
        {/* Radial cyan glow behind computer */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 65%, rgba(106,171,242,0.09) 0%, transparent 70%)',
          }}
        />

        <p
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.7)' }}
        >
          Four volumes
        </p>

        <p
          className="text-sm mb-16 max-w-sm leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.45)' }}
        >
          Git, prompting, skills, and agentic agents — for designers.
        </p>

        {/* Computer */}
        <div className="relative w-full max-w-3xl">
          <ComputerWrapper title="Claude" progress={0}>
            <AsciiClaude config={asciiConfig} />
          </ComputerWrapper>
        </div>
      </header>

      {/* ── Divider ── */}
      <div className="relative py-20 px-8">
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
      </div>

      {/* ── Decks ── */}
      <main className="px-8 pb-32 max-w-5xl mx-auto w-full">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.7)' }}
        >
          Volumes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {decks.map((deck, i) => (
            <DeckCard key={deck.slug} deck={deck} index={i} />
          ))}
        </div>
      </main>

      {/* ── Animation Controls ── */}
      <AsciiControls config={asciiConfig} onChange={setAsciiConfig} />

      {/* ── Footer ── */}
      <footer
        className="flex items-center justify-between px-8 py-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span
          className="text-xs"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}
        >
          Use ← → to navigate · Esc to return
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(106,171,242,0.5)' }}
        >
          Claude
        </span>
      </footer>
    </div>
  );
}

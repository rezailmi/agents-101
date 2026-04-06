'use client';

import { useState } from 'react'
import Link from 'next/link';
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
    <div className="min-h-screen" style={{ background: '#010101', overflowX: 'hidden' }}>

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
          Folders
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {decks.map((deck, i) => (
            <DeckCard key={deck.slug} deck={deck} index={i} />
          ))}
        </div>
      </main>

      {/* ── Built live callout ── */}
      <div className="px-8 pb-20 max-w-5xl mx-auto w-full">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
        >
          Built live during this session
        </p>
        <Link href="/lunch" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              padding: '20px 28px',
              background: '#0f0f0f',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,214,0,0.3)';
              (e.currentTarget as HTMLDivElement).style.background = '#141208';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLDivElement).style.background = '#0f0f0f';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <span style={{ fontSize: 36, lineHeight: 1 }}>🎡</span>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontStyle: 'italic',
                  color: '#fff',
                  margin: '0 0 4px',
                  lineHeight: 1,
                }}>
                  Lunch Wheel
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  margin: 0,
                }}>
                  Built in this session — a spinning wheel for deciding where to eat, with haptic feedback and confetti.
                </p>
              </div>
            </div>
            <span
              className="btn-aqua"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Try it →
            </span>
          </div>
        </Link>
      </div>

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
          agents-101
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

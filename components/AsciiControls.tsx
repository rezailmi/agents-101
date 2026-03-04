'use client';

import { useState } from 'react';
import type { AsciiConfig } from './AsciiClaude';
import { DEFAULT_ASCII_CONFIG } from './AsciiClaude';

interface Props {
  config: AsciiConfig;
  onChange: (c: AsciiConfig) => void;
}

export function AsciiControls({ config, onChange }: Props) {
  const [open, setOpen] = useState(false);

  function update(key: keyof AsciiConfig, value: number) {
    onChange({ ...config, [key]: value });
  }

  function reset() {
    onChange(DEFAULT_ASCII_CONFIG);
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
      }}
    >
      {/* Panel */}
      {open && (
        <div
          style={{
            background: 'rgba(18, 18, 22, 0.94)',
            border: '1px solid rgba(255,255,255,0.11)',
            borderRadius: 10,
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.65), 0 1px 0 rgba(255,255,255,0.06) inset',
            width: 230,
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '9px 12px 8px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(106,171,242,0.75)',
              }}
            >
              Animation
            </span>
            <button
              onClick={reset}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 4px',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(106,171,242,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              Reset
            </button>
          </div>

          {/* Sliders */}
          <div style={{ padding: '12px 14px 14px' }}>
            <SliderRow
              label="Shape"
              value={config.waveAmp}
              min={0} max={6} step={0.1}
              display={v => v.toFixed(1)}
              onChange={v => update('waveAmp', v)}
            />
            <SliderRow
              label="Speed"
              value={config.waveSpeed}
              min={0} max={0.15} step={0.005}
              display={v => v.toFixed(3)}
              onChange={v => update('waveSpeed', v)}
            />
            <SliderRow
              label="Glitch"
              value={config.glitch}
              min={0} max={0.1} step={0.005}
              display={v => v.toFixed(3)}
              onChange={v => update('glitch', v)}
              last
            />
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        className="btn-aqua"
        onClick={() => setOpen(o => !o)}
        style={{ fontSize: 10, letterSpacing: '0.06em', gap: 5 }}
      >
        <span style={{ opacity: 0.8, fontSize: 11 }}>⚙</span>
        {open ? 'Hide' : 'Controls'}
      </button>
    </div>
  );
}

/* ── Slider row ────────────────────────────────────────────── */

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
  last,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: (v: number) => string;
  onChange: (v: number) => void;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : 14 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'rgba(106,171,242,0.85)',
            minWidth: 36,
            textAlign: 'right',
          }}
        >
          {display(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="aqua-slider"
      />
    </div>
  );
}

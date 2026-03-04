'use client';

import { useState, useEffect, useRef } from 'react';

export interface AsciiConfig {
  waveAmp:   number;  // 0–6
  waveSpeed: number;  // 0–0.15 rad/tick
  glitch:    number;  // 0–0.1 base intensity
}

const BASE_LINES = [
  `                                        0000000000000     000000000                                      `,
  `                                     0000FFFFFFFFFF0000000000FFF0000000                                  `,
  `                                   0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000                                `,
  `                                  000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000                              `,
  `                                  00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000                             `,
  `                                 00FFFFFFFFFFF0000000000FFFFFFFFFFFFFFFFFF00                             `,
  `                                 0FFFFFFFFFF0000      000FFFFFFFFFFFFFFFFFF00                            `,
  `                                 0FFFFFFFF000           00FFFFFFFFFFFFFFFFFF0                            `,
  `                              0000FFFFFFF00              0FFFFFFFFFFFFFFFFFF0                            `,
  `                            0000FFFFFFFFF0               0FFFFFFFFFFFFFFFFFF0                            `,
  `                          000FFFFFFFFFFF00               0FFFFFFFFFFFFFFFFF00                            `,
  `                         000FFFFFFFFFFFF00              00FFFFFFFFFFFFFFFF00                             `,
  `                         00FFFFFFFFFFFFF00             00FFFFFFFFFFFFFFFF00                              `,
  `                        00FFFFFFFFFFFFFFF0           000FFFFFFFFFFFFFFFFF0                               `,
  `                        00FFFFFFFFFFFFFFF000       0000FFFFFFFFFFFFFFFFFF000                             `,
  `                         00FFFFFFFFFFFFFFFF000000000FFFFFFFFFFFFFFFFFFFFFFF000                           `,
  `                         000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000                         `,
  `                          000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000                        `,
  `                            000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000                       `,
  `                              0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00                      `,
  `                              0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00                      `,
  `                              0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0                      `,
  `                              00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00                     `,
  `                              00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00                      `,
  `                              00FFFFFFFFFFFFFFFFFFFFFFF00000FFFFFFFFFFFFFFFFFFFFF00                      `,
  `                               00FFFFFFFFFFFFFFFFFFFFFF00  0000FFFFFFFFFFFFFFFF000                       `,
  `                                00FFFFFFFFFFFFFFFFFFFF00      000000FFFFFFFF0000                         `,
  `                                 00FFFFFFFFFFFFFFFFFF00          0000000000000                           `,
  `                                  000FFFFFFFFFFFFFF000                                                   `,
  `                                   0000FFFFFFFFFF000                                                     `,
  `                                     0000000000000                                                       `,
  `                                        0000000                                                          `,
];

/* ensure all lines are the same length for clean shifting */
const LINE_LEN = Math.max(...BASE_LINES.map(l => l.length));
const PADDED = BASE_LINES.map(l => l.padEnd(LINE_LEN, ' '));

/* ── Shape wave ───────────────────────────────────────────── */

const WAVE_FREQ = 0.22; // radians per row  (~1.1 visible cycles over 32 rows)

function shiftLine(line: string, shift: number): string {
  if (shift === 0) return line;
  if (shift > 0) return ' '.repeat(shift) + line.slice(0, LINE_LEN - shift);
  const abs = -shift;
  return line.slice(abs) + ' '.repeat(abs);
}

/* ── Glitch on fill chars ─────────────────────────────────── */

const GLITCH_ALT = ['f', '#', '$', 'E', 'F', 'F', 'F', 'F'];

function buildFrame(phase: number, glitchIntensity: number, waveAmp: number): string[] {
  return PADDED.map((line, li) => {
    const shift = Math.round(Math.sin(li * WAVE_FREQ - phase) * waveAmp);
    const shifted = shiftLine(line, shift);

    return shifted.split('').map(ch => {
      if (ch === 'F' && Math.random() < glitchIntensity)
        return GLITCH_ALT[Math.floor(Math.random() * GLITCH_ALT.length)];
      if (ch === '0' && Math.random() < glitchIntensity * 0.3)
        return 'o';
      return ch;
    }).join('');
  });
}

/* ── Colour (static — shape is the animation now) ────────── */

function charColor(ch: string): string {
  if (ch === '0' || ch === 'o') return '#6aabf2';
  if (ch === 'F') return '#d0d0d0';
  return '#ffffff'; // glitch chars
}

export const DEFAULT_ASCII_CONFIG: AsciiConfig = {
  waveAmp:   2,
  waveSpeed: 0.05,
  glitch:    0.025,
};

/* ── Component ────────────────────────────────────────────── */

export function AsciiClaude({ config }: { config?: AsciiConfig }) {
  const [lines, setLines] = useState(PADDED);
  const cfgRef = useRef<AsciiConfig>(config ?? DEFAULT_ASCII_CONFIG);

  useEffect(() => {
    cfgRef.current = config ?? DEFAULT_ASCII_CONFIG;
  }, [config]);

  useEffect(() => {
    let count = 0;
    let phase = 0; // lives in closure — no extra state/render

    const id = setInterval(() => {
      count++;
      const { waveSpeed, waveAmp, glitch } = cfgRef.current;
      phase += waveSpeed;
      const intensity = count % 25 === 0 ? glitch * 6 : glitch;
      setLines(buildFrame(phase, intensity, waveAmp));
    }, 80);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '5%',
      }}
    >
      <pre
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '8px',
          lineHeight: '1.25',
          margin: 0,
          whiteSpace: 'pre',
          userSelect: 'none',
          letterSpacing: '0.02em',
        }}
      >
        {lines.map((line, li) => {
          const segs: Array<{ text: string; color: string }> = [];
          let cur = { text: '', color: '' };

          for (const ch of line) {
            const color = ch === ' ' ? 'transparent' : charColor(ch);
            if (color !== cur.color) {
              if (cur.text) segs.push(cur);
              cur = { text: ch, color };
            } else {
              cur.text += ch;
            }
          }
          if (cur.text) segs.push(cur);

          return (
            <span key={li}>
              {segs.map((seg, si) => (
                <span key={si} style={{ color: seg.color }}>
                  {seg.text}
                </span>
              ))}
              {'\n'}
            </span>
          );
        })}
      </pre>
    </div>
  );
}

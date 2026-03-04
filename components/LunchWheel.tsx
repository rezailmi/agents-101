'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

/* Vivid carnival palette — bg color + text color per slice */
const SLICES = [
  { fill: '#FF3B5C', text: '#fff' },
  { fill: '#FFD600', text: '#111' },
  { fill: '#00C04B', text: '#fff' },
  { fill: '#2979FF', text: '#fff' },
  { fill: '#FF7C00', text: '#fff' },
  { fill: '#E91E8C', text: '#fff' },
  { fill: '#7C3AED', text: '#fff' },
  { fill: '#00D4E0', text: '#111' },
  { fill: '#FF5252', text: '#fff' },
  { fill: '#AEEA00', text: '#111' },
];

export interface LunchWheelHandle {
  spin: () => void;
}

interface Props {
  restaurants: string[];
  onSpinEnd: (winner: string) => void;
}

export const LunchWheel = forwardRef<LunchWheelHandle, Props>(
  ({ restaurants, onSpinEnd }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const finalRotRef = useRef(0);

    const n = restaurants.length;
    const CX = 265, CY = 265, R = 195;

    useImperativeHandle(ref, () => ({
      spin() {
        if (spinning || n < 2) return;
        setSpinning(true);
        const spins = 6 + Math.floor(Math.random() * 4);
        const extra = Math.random() * 360;
        const newRot = rotation + spins * 360 + extra;
        finalRotRef.current = newRot;
        setRotation(newRot);
      },
    }));

    function polarToCart(angleDeg: number, radius = R) {
      const rad = ((angleDeg - 90) * Math.PI) / 180;
      return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
    }

    function slicePath(i: number): string {
      if (n === 1) {
        return `M ${CX} ${CY - R} A ${R} ${R} 0 1 1 ${CX - 0.001} ${CY - R} Z`;
      }
      const angle = 360 / n;
      const s = polarToCart(i * angle);
      const e = polarToCart((i + 1) * angle);
      const large = angle > 180 ? 1 : 0;
      return `M ${CX} ${CY} L ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${R} ${R} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)} Z`;
    }

    function handleTransitionEnd(evt: React.TransitionEvent) {
      if (evt.propertyName !== 'transform') return;
      if (!spinning) return;
      setSpinning(false);
      const sliceAngle = 360 / n;
      const normRot = ((finalRotRef.current % 360) + 360) % 360;
      const pointerPos = (360 - normRot) % 360;
      const idx = Math.floor(pointerPos / sliceAngle) % n;
      onSpinEnd(restaurants[idx]);
    }

    if (n === 0) {
      return (
        <div style={{
          width: 530, height: 530,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '3px dashed rgba(255,214,0,0.3)', borderRadius: '50%',
        }}>
          <p style={{ fontFamily: 'var(--font-fun)', fontSize: 16, color: 'rgba(255,255,255,0.4)' }}>
            Add restaurants below!
          </p>
        </div>
      );
    }

    const sliceAngle = 360 / n;
    const fontSize = n > 8 ? 10 : n > 5 ? 12 : 14;
    const maxChars = n > 8 ? 8 : n > 5 ? 10 : 14;
    const pegCount = 40;

    return (
      <div style={{ position: 'relative', width: 530, height: 560, flexShrink: 0 }}>
        {/* Pointer — golden arrow with red pivot pin */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            transformOrigin: '50% 14px',
            zIndex: 20,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
            animation: spinning
              ? 'pointerTick 0.11s ease-in-out infinite alternate'
              : 'none',
          }}
        >
          <svg width="36" height="56" viewBox="-18 -4 36 56">
            {/* Shaft */}
            <rect x="-5" y="10" width="10" height="24" rx="3" fill="#FFD600" stroke="#C4A000" strokeWidth="1.5" />
            {/* Arrowhead */}
            <polygon points="0,50 -13,14 13,14" fill="#FFD600" stroke="#C4A000" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Highlight on arrowhead */}
            <polygon points="0,44 -7,18 7,18" fill="rgba(255,255,255,0.25)" />
            {/* Pivot circle */}
            <circle cx="0" cy="4" r="12" fill="#FF3B5C" stroke="#8B0000" strokeWidth="2" />
            <circle cx="0" cy="4" r="6" fill="#FF8FAB" />
          </svg>
        </div>

        <svg viewBox="0 0 530 560" width={530} height={560}>
          <defs>
            {/* Warm rim gradient */}
            <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5c2a00" />
              <stop offset="100%" stopColor="#2a1000" />
            </radialGradient>
            {/* Subtle gloss overlay on slices */}
            <radialGradient id="sliceGloss" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.07)" />
            </radialGradient>
            <filter id="wheelGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Outermost wooden rim */}
          <circle cx={CX} cy={CY} r={R + 36} fill="url(#rimGrad)" stroke="#8B4513" strokeWidth="3" />
          {/* Gold trim ring */}
          <circle cx={CX} cy={CY} r={R + 26} fill="none" stroke="#FFD600" strokeWidth="4" />
          <circle cx={CX} cy={CY} r={R + 18} fill="none" stroke="rgba(255,214,0,0.3)" strokeWidth="1" />

          {/* Rotating wheel group */}
          <g
            style={{
              transform: `rotate(${rotation}deg)`,
              transformBox: 'fill-box',
              transformOrigin: 'center',
              transition: spinning
                ? 'transform 3.5s cubic-bezier(0.17, 0.67, 0.08, 1.0)'
                : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* Slices */}
            {restaurants.map((name, i) => {
              const { fill, text } = SLICES[i % SLICES.length];
              const midAngle = (i + 0.5) * sliceAngle;
              const textPos = polarToCart(midAngle, R * 0.62);
              const textAngle = midAngle <= 180 ? midAngle - 90 : midAngle - 90 + 180;
              const truncated = name.length > maxChars ? name.slice(0, maxChars - 1) + '…' : name;

              return (
                <g key={i}>
                  <path d={slicePath(i)} fill={fill} stroke="rgba(0,0,0,0.2)" strokeWidth={2} />
                  {/* Subtle gloss */}
                  <path d={slicePath(i)} fill="url(#sliceGloss)" style={{ pointerEvents: 'none' }} />
                  <text
                    x={textPos.x}
                    y={textPos.y}
                    transform={`rotate(${textAngle}, ${textPos.x}, ${textPos.y})`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    fontFamily="var(--font-fun), system-ui"
                    fontWeight="700"
                    fill={text}
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {truncated}
                  </text>
                </g>
              );
            })}

            {/* Peg dots around the rim — on the rotating group so they look structural */}
            {Array.from({ length: pegCount }, (_, i) => {
              const { x, y } = polarToCart((i / pegCount) * 360, R + 10);
              const isGold = i % 2 === 0;
              return (
                <circle
                  key={`peg-${i}`}
                  cx={x} cy={y} r={5.5}
                  fill={isGold ? '#FFD600' : '#ffffff'}
                  stroke="rgba(0,0,0,0.35)"
                  strokeWidth={1}
                />
              );
            })}

            {/* Center hub starburst */}
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i / 8) * 360;
              const inner = polarToCart(a, 18);
              const outer = polarToCart(a, 34);
              return (
                <line
                  key={`spoke-${i}`}
                  x1={inner.x} y1={inner.y}
                  x2={outer.x} y2={outer.y}
                  stroke="#FFD600" strokeWidth={2.5} strokeLinecap="round"
                />
              );
            })}
            <circle cx={CX} cy={CY} r={28} fill="#FF3B5C" stroke="#8B0000" strokeWidth="3" />
            <circle cx={CX} cy={CY} r={14} fill="#FFD600" stroke="#C4A000" strokeWidth="1.5" />
            <circle cx={CX} cy={CY} r={6}  fill="#fff" />
          </g>

          {/* Fixed outer gold ring (non-rotating) */}
          <circle cx={CX} cy={CY} r={R + 3} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth={2} />
        </svg>
      </div>
    );
  }
);

LunchWheel.displayName = 'LunchWheel';

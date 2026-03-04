'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useWebHaptics } from 'web-haptics/react';
import { MacMenuBar } from '@/components/MacMenuBar';
import { LunchWheel, LunchWheelHandle } from '@/components/LunchWheel';
import { RestaurantList } from '@/components/RestaurantList';

const DEFAULTS = ['Tacos', 'Pizza', 'Sushi', 'Sandwiches', 'Thai'];
const STORAGE_KEY = 'lunch-wheel-restaurants';

const CONFETTI_COLORS = [
  '#FF3B5C', '#FFD600', '#00C04B', '#2979FF',
  '#FF7C00', '#E91E8C', '#7C3AED', '#00D4E0',
];

function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 32 }, (_, i) => {
      const angle = (i / 32) * 360 + (Math.random() - 0.5) * 20;
      const dist = 120 + Math.random() * 200;
      const rad = (angle * Math.PI) / 180;
      return {
        id: i,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        cx: `${(Math.cos(rad) * dist).toFixed(0)}px`,
        cy: `${(Math.sin(rad) * dist - 80).toFixed(0)}px`,
        cr: `${Math.random() * 720 - 360}deg`,
        delay: `${(Math.random() * 0.4).toFixed(2)}s`,
        size: 8 + Math.random() * 10,
        isRect: i % 3 !== 1,
      };
    }), []
  );

  return (
    <div style={{
      position: 'fixed', top: '50%', left: '50%',
      pointerEvents: 'none', zIndex: 100,
    }}>
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.isRect ? p.size : p.size,
            height: p.isRect ? p.size * 0.45 : p.size,
            borderRadius: p.isRect ? 2 : '50%',
            background: p.color,
            animation: `confettiBurst 1.4s ease-out ${p.delay} both`,
            '--cx': p.cx,
            '--cy': p.cy,
            '--cr': p.cr,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function LunchPage() {
  const [restaurants, setRestaurants] = useState<string[]>(DEFAULTS);
  const [winner, setWinner] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const wheelRef = useRef<LunchWheelHandle>(null);
  const { trigger } = useWebHaptics();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setRestaurants(JSON.parse(saved));
    } catch {}
  }, []);

  function handleRestaurantsChange(list: string[]) {
    setRestaurants(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function handleSpin() {
    if (spinning || restaurants.length < 2) return;
    trigger('buzz');
    setWinner(null);
    setShowConfetti(false);
    setSpinning(true);
    wheelRef.current?.spin();
  }

  function handleSpinEnd(w: string) {
    setSpinning(false);
    setWinner(w);
    trigger('success');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  }

  const canSpin = !spinning && restaurants.length >= 2;

  return (
    <div style={{ background: '#0d0805', minHeight: '100vh' }}>
      <MacMenuBar />

      {showConfetti && <Confetti />}

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(16px, 5vw, 32px) clamp(12px, 4vw, 24px) 80px',
        gap: 20,
        boxSizing: 'border-box',
        width: '100%',
      }}>

        {/* Back button */}
        <div style={{ width: '100%', maxWidth: 530, alignSelf: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span
              className="btn-aqua"
              style={{ fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              ← Back
            </span>
          </Link>
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-fun)',
            fontSize: 'clamp(32px, 10vw, 52px)',
            fontWeight: 700,
            color: '#FFD600',
            margin: 0,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            textShadow: '3px 3px 0 #FF3B5C, 6px 6px 0 rgba(0,0,0,0.3)',
            animation: 'floatBob 3s ease-in-out infinite',
          }}>
            🎡 Lunch Wheel
          </h1>
          <p style={{
            fontFamily: 'var(--font-fun)',
            fontSize: 14,
            color: 'rgba(255,214,0,0.55)',
            marginTop: 6,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            Let fate decide your meal
          </p>
        </div>

        {/* Wheel */}
        <LunchWheel ref={wheelRef} restaurants={restaurants} onSpinEnd={handleSpinEnd} />

        {/* Winner banner */}
        {winner ? (
          <div
            style={{
              textAlign: 'center',
              padding: 'clamp(16px, 5vw, 28px) clamp(20px, 8vw, 56px)',
              background: 'linear-gradient(135deg, #1a0a00, #2a1200)',
              border: '3px solid #FFD600',
              borderRadius: 20,
              boxShadow: '0 0 0 6px rgba(255,214,0,0.1), 0 20px 60px rgba(0,0,0,0.5)',
              animation: 'winnerPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
              width: '100%',
              maxWidth: 480,
              boxSizing: 'border-box',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-fun)',
              fontSize: 12,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,214,0,0.6)',
              marginBottom: 6,
            }}>
              🏆 Today you&apos;re getting
            </p>
            <p style={{
              fontFamily: 'var(--font-fun)',
              fontSize: 'clamp(36px, 12vw, 56px)',
              fontWeight: 700,
              color: '#FFD600',
              margin: '0 0 20px',
              lineHeight: 1.1,
              textShadow: '3px 3px 0 #FF3B5C',
              wordBreak: 'break-word',
            }}>
              {winner}
            </p>
            <button
              onClick={() => { trigger('success'); setWinner(null); }}
              style={{
                fontFamily: 'var(--font-fun)',
                fontSize: 16,
                fontWeight: 700,
                color: '#111',
                background: '#FFD600',
                border: '3px solid #C4A000',
                borderRadius: 100,
                padding: '10px 28px',
                cursor: 'pointer',
                boxShadow: '0 4px 0 #8B6800',
                letterSpacing: '0.03em',
              }}
            >
              Spin Again! 🎰
            </button>
          </div>
        ) : (
          /* Arcade-style spin button */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <button
              onClick={handleSpin}
              onMouseDown={() => canSpin && setPressed(true)}
              onMouseUp={() => setPressed(false)}
              onMouseLeave={() => setPressed(false)}
              disabled={!canSpin}
              style={{
                width: 130,
                height: 130,
                borderRadius: '50%',
                fontFamily: 'var(--font-fun)',
                fontSize: 26,
                fontWeight: 700,
                color: '#fff',
                cursor: canSpin ? 'pointer' : 'not-allowed',
                border: '4px solid #7A0000',
                background: spinning
                  ? 'linear-gradient(160deg, #cc4040 0%, #a00000 100%)'
                  : 'linear-gradient(160deg, #ff6060 0%, #ff1a1a 35%, #cc0000 65%, #a80000 100%)',
                boxShadow: pressed
                  ? '0 3px 0 #5a0000, 0 5px 16px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.2)'
                  : '0 9px 0 #5a0000, 0 14px 30px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.2)',
                transform: pressed ? 'translateY(6px)' : 'translateY(0)',
                transition: 'transform 0.06s, box-shadow 0.06s',
                textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                letterSpacing: '-0.01em',
                opacity: spinning ? 0.75 : 1,
              }}
            >
              {spinning ? '🌀' : 'SPIN!'}
            </button>
            {restaurants.length < 2 && (
              <p style={{
                fontFamily: 'var(--font-fun)',
                fontSize: 12,
                color: 'rgba(255,214,0,0.5)',
                marginTop: 4,
              }}>
                Add at least 2 restaurants
              </p>
            )}
          </div>
        )}

        {/* Divider */}
        <div style={{
          width: '100%', maxWidth: 530,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(255,214,0,0.2), transparent)',
          margin: '4px 0',
        }} />

        {/* Restaurant list */}
        <RestaurantList restaurants={restaurants} onChange={handleRestaurantsChange} />
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useWebHaptics } from 'web-haptics/react';

interface Props {
  restaurants: string[];
  onChange: (restaurants: string[]) => void;
}

export function RestaurantList({ restaurants, onChange }: Props) {
  const [input, setInput] = useState('');
  const { trigger } = useWebHaptics();

  function handleAdd() {
    const name = input.trim();
    if (!name || restaurants.includes(name)) return;
    trigger('nudge');
    onChange([...restaurants, name]);
    setInput('');
  }

  function handleRemove(i: number) {
    trigger('nudge');
    onChange(restaurants.filter((_, idx) => idx !== i));
  }

  return (
    <div style={{ width: '100%', maxWidth: 530 }}>
      <p
        style={{
          fontFamily: 'var(--font-fun)',
          fontSize: 13,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,214,0,0.7)',
          marginBottom: 12,
          fontWeight: 600,
        }}
      >
        🍽 Restaurants ({restaurants.length})
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
        {restaurants.map((name, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '7px 14px',
              background: '#1a0e04',
              border: '1px solid rgba(255,214,0,0.15)',
              borderRadius: 8,
              fontFamily: 'var(--font-fun)',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
            }}
          >
            <span>{name}</span>
            <button
              onClick={() => handleRemove(i)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                fontSize: 18,
                padding: '0 0 0 12px',
                lineHeight: 1,
              }}
              title="Remove"
            >
              ×
            </button>
          </div>
        ))}
        {restaurants.length === 0 && (
          <p
            style={{
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              textAlign: 'center',
              padding: '16px 0',
            }}
          >
            No restaurants yet
          </p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add a restaurant…"
          maxLength={40}
          style={{
            flex: 1,
            background: '#1a0e04',
            border: '1px solid rgba(255,214,0,0.2)',
            borderRadius: 8,
            padding: '8px 14px',
            color: '#fff',
            fontFamily: 'var(--font-fun)',
            fontSize: 14,
            outline: 'none',
          }}
        />
        <button
          onClick={handleAdd}
          disabled={!input.trim()}
          className="btn-aqua"
          style={{ borderRadius: 8, opacity: !input.trim() ? 0.5 : 1 }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

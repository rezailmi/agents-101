'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/* ── Menu definitions ─────────────────────────────────────── */

type Separator = { type: 'separator' };
type MenuItem = {
  type?: never;
  label: string;
  href?: string;
  action?: () => void;
  disabled?: boolean;
  checked?: boolean;
  shortcut?: string;
};
type MenuEntry = Separator | MenuItem;

const MENUS: Record<string, MenuEntry[]> = {
  'On Claude': [
    { label: 'About On Claude', disabled: true },
    { type: 'separator' },
    { label: 'Hide On Claude', shortcut: '⌘H', disabled: true },
    { type: 'separator' },
    { label: 'Quit On Claude', shortcut: '⌘Q', disabled: true },
  ],
  File: [
    { label: 'Vol. I — Git', href: '/deck/git', shortcut: '⌘1' },
    { label: 'Vol. II — Prompting', href: '/deck/prompting', shortcut: '⌘2' },
    { label: 'Vol. III — Skills', href: '/deck/skills', shortcut: '⌘3' },
    { label: 'Vol. IV — Agents', href: '/deck/agents', shortcut: '⌘4' },
    { type: 'separator' },
    { label: 'Close Window', shortcut: '⌘W', disabled: true },
  ],
  Edit: [
    { label: 'Undo', shortcut: '⌘Z', disabled: true },
    { label: 'Redo', shortcut: '⌘⇧Z', disabled: true },
    { type: 'separator' },
    { label: 'Cut', shortcut: '⌘X', disabled: true },
    { label: 'Copy', shortcut: '⌘C', disabled: true },
    { label: 'Paste', shortcut: '⌘V', disabled: true },
  ],
  View: [
    { label: 'as Icons', shortcut: '⌘1', disabled: true },
    { label: 'as List', shortcut: '⌘2', disabled: true },
    { label: 'as Columns', shortcut: '⌘3', checked: true, disabled: true },
    { type: 'separator' },
    { label: 'Show Slide Numbers', checked: true, disabled: true },
    { label: 'Hide Toolbar', shortcut: '⌥⌘T', disabled: true },
    { type: 'separator' },
    { label: 'Enter Full Screen', shortcut: '⌃⌘F', disabled: true },
  ],
  Go: [
    { label: 'Home', href: '/', shortcut: '⌘↑' },
    { type: 'separator' },
    { label: 'Vol. I — Git', href: '/deck/git' },
    { label: 'Vol. II — Prompting', href: '/deck/prompting' },
    { label: 'Vol. III — Skills', href: '/deck/skills' },
    { label: 'Vol. IV — Agents', href: '/deck/agents' },
  ],
  Window: [
    { label: 'Minimize', shortcut: '⌘M', disabled: true },
    { label: 'Zoom', disabled: true },
    { type: 'separator' },
    { label: 'On Claude', checked: true, disabled: true },
  ],
  Help: [
    { label: 'On Claude Help', disabled: true },
    { type: 'separator' },
    { label: 'Built with Claude Code', disabled: true },
  ],
};

const MENU_NAMES = Object.keys(MENUS);

/* ── Helpers ──────────────────────────────────────────────── */

function getTime() {
  return new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/* ── Dropdown ─────────────────────────────────────────────── */

function Dropdown({
  items,
  onClose,
}: {
  items: MenuEntry[];
  onClose: () => void;
}) {
  const router = useRouter();

  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 1px)',
        left: 0,
        minWidth: 220,
        background: 'rgba(240,240,240,0.97)',
        border: '1px solid rgba(0,0,0,0.25)',
        borderRadius: 5,
        boxShadow: '0 6px 24px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.2)',
        padding: '4px 0',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        fontFamily: 'system-ui, -apple-system, "Lucida Grande", sans-serif',
      }}
    >
      {items.map((entry, i) => {
        if ('type' in entry && entry.type === 'separator') {
          return (
            <div
              key={i}
              style={{
                height: 1,
                background: 'rgba(0,0,0,0.12)',
                margin: '4px 0',
              }}
            />
          );
        }
        const item = entry as MenuItem;
        return (
          <DropdownItem
            key={i}
            item={item}
            onActivate={() => {
              if (item.disabled) return;
              if (item.href) {
                router.push(item.href);
                onClose();
              } else if (item.action) {
                item.action();
                onClose();
              }
            }}
          />
        );
      })}
    </div>
  );
}

function DropdownItem({
  item,
  onActivate,
}: {
  item: MenuItem;
  onActivate: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const active = hovered && !item.disabled;

  return (
    <div
      onClick={onActivate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px 18px',
        height: 20,
        cursor: item.disabled ? 'default' : 'pointer',
        borderRadius: 3,
        margin: '0 2px',
        background: active
          ? 'linear-gradient(180deg, #4d95f0 0%, #1458c8 50%, #1050be 51%, #1e64d4 100%)'
          : 'transparent',
        color: item.disabled ? 'rgba(0,0,0,0.35)' : active ? '#fff' : '#111',
        textShadow: active ? '0 1px 1px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Checkmark column */}
      <span style={{ width: 16, fontSize: 11, flexShrink: 0 }}>
        {item.checked ? '✓' : ''}
      </span>

      {/* Label */}
      <span style={{ fontSize: 13, flex: 1 }}>{item.label}</span>

      {/* Shortcut */}
      {item.shortcut && (
        <span
          style={{
            fontSize: 11,
            marginLeft: 24,
            opacity: item.disabled ? 0.5 : 0.7,
            color: active ? '#fff' : '#555',
          }}
        >
          {item.shortcut}
        </span>
      )}
    </div>
  );
}

/* ── Menu Bar ─────────────────────────────────────────────── */

export function MacMenuBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [time, setTime] = useState('');
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTime(getTime());
    const clockId = setInterval(() => setTime(getTime()), 30_000);

    function handlePointerDown(e: MouseEvent) {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenMenu(null);
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(clockId);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav
      ref={barRef}
      className="sticky top-0 z-50 flex items-center select-none"
      style={{
        height: 22,
        background: `
          repeating-linear-gradient(
            180deg,
            rgba(255,255,255,0.18) 0px,
            rgba(255,255,255,0.18) 1px,
            rgba(0,0,0,0)         1px,
            rgba(0,0,0,0)         2px
          ),
          linear-gradient(180deg,
            #f2f1ee 0%,
            #d4d2ce 45%,
            #c8c6c1 50%,
            #cecdca 100%
          )
        `,
        borderBottom: '1px solid #777',
        boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
        fontFamily: 'system-ui, -apple-system, "Lucida Grande", sans-serif',
      }}
    >
      {/* Apple logo */}
      <span
        style={{
          padding: '0 10px',
          fontSize: 14,
          cursor: 'default',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >

      </span>

      {/* Menu items */}
      {MENU_NAMES.map((name) => {
        const isOpen = openMenu === name;
        const isBold = name === 'On Claude';

        return (
          <div
            key={name}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          >
            <span
              onClick={() => setOpenMenu(isOpen ? null : name)}
              onMouseEnter={() => {
                if (openMenu && openMenu !== name) setOpenMenu(name);
              }}
              style={{
                padding: '0 8px',
                height: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: 13,
                fontWeight: isBold ? 700 : 400,
                color: isOpen ? '#fff' : '#111',
                cursor: 'default',
                whiteSpace: 'nowrap',
                borderRadius: 3,
                background: isOpen
                  ? 'linear-gradient(180deg, #4d95f0 0%, #1458c8 50%, #1050be 51%, #1e64d4 100%)'
                  : 'transparent',
                textShadow: isOpen ? '0 1px 1px rgba(0,0,0,0.4)' : 'none',
              }}
            >
              {name}
            </span>

            {isOpen && (
              <Dropdown items={MENUS[name]} onClose={() => setOpenMenu(null)} />
            )}
          </div>
        );
      })}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Clock */}
      <span
        style={{
          padding: '0 10px',
          fontSize: 12,
          fontWeight: 500,
          color: '#111',
          whiteSpace: 'nowrap',
        }}
      >
        {time || '12:00 PM'}
      </span>
    </nav>
  );
}

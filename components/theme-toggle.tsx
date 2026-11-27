'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Monitor, Moon, Sun, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme, type Theme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const themeOptions: { value: Theme; label: string; icon: LucideIcon }[] = [
  { value: 'light', label: '浅色', icon: Sun },
  { value: 'dark', label: '深色', icon: Moon },
  { value: 'system', label: '系统默认', icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const CurrentIcon = themeOptions.find((option) => option.value === theme)?.icon ?? Monitor;

  return (
    <div ref={containerRef} className="relative">
      <Button
        variant="outline"
        size="icon-sm"
        aria-label="切换主题"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <CurrentIcon />
      </Button>

      {open && (
        <div
          role="menu"
          aria-label="主题"
          className="absolute right-0 top-full z-50 mt-2 min-w-36 rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          {themeOptions.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={theme === value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
                theme === value && 'bg-accent text-accent-foreground',
              )}
            >
              <Icon className="size-4" />
              <span className="flex-1 text-left">{label}</span>
              {theme === value && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

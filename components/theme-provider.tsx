'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'arsrna-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function readStoredTheme(): Theme {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === 'light' || value === 'dark' || value === 'system') {
      return value;
    }
  } catch {
    // localStorage may be unavailable in private browsing modes
  }
  return 'system';
}

function applyTheme(theme: Theme, systemDark: boolean) {
  const isDark = theme === 'dark' || (theme === 'system' && systemDark);
  const root = document.documentElement;

  root.classList.toggle('dark', isDark);
  root.style.colorScheme = isDark ? 'dark' : 'light';
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isDark ? '#101010' : '#ffffff');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const themeRef = useRef<Theme>('system');

  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const stored = readStoredTheme();

    themeRef.current = stored;
    setThemeState(stored);
    applyTheme(stored, media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      if (themeRef.current === 'system') {
        applyTheme('system', event.matches);
      }
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    themeRef.current = next;
    setThemeState(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors and keep the in-memory preference
    }

    applyTheme(next, window.matchMedia(DARK_QUERY).matches);
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

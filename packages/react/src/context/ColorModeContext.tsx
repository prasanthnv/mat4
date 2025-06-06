// context/ColorModeContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const STORAGE_KEY = 'color-mode';

type Mode = 'light' | 'dark';

const ColorModeContext = createContext<{
  mode: Mode;
  toggleColorMode: () => void;
}>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Mode | null;
    if (stored === 'light' || stored === 'dark') {
      setMode(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const value = useMemo(() => ({ mode, toggleColorMode }), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

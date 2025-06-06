// ThemeProvider.tsx
import { ReactNode, useMemo } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ColorModeProvider, useColorMode } from './context/ColorModeContext';
import { lightTheme, darkTheme } from './themeBuilder';
export * from '@mui/material';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { mode } = useColorMode();
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ColorModeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ColorModeProvider>
  );
};

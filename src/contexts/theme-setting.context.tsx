import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { theme, globalStyles } from 'theme';
import { useTheme } from 'next-themes';
import { CssBaseline, GlobalStyles } from '@mui/material';

type PaletteMode = 'light' | 'dark';

export const AppThemeProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { resolvedTheme } = useTheme();
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(resolvedTheme === 'light' ? 'light' : 'dark');

  useEffect(() => {
    resolvedTheme === "light"
      ? setPaletteMode('light')
      : setPaletteMode('dark');
  }, [resolvedTheme])

  return (
    <CssVarsProvider theme={theme}>
        <GlobalStyles styles={globalStyles}/>
        <CssBaseline/>
        {children}
    </CssVarsProvider>
  );
};

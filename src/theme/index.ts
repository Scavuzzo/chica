import { Barlow } from '@next/font/google';
import localFont from '@next/font/local'
import { css, withStyles } from '@mui/material';
import { experimental_extendTheme as extendTheme, responsiveFontSizes } from '@mui/material';

export const barlow = Barlow({
  weight: ['200', '300', '400', '500', '700'],
  display: 'swap',
  fallback: ['sans-serif', 'Helvetica', 'Arial'],
});

export const ramaGothic = localFont({
  src: '../fonts/RamaGothic.otf',
  display: 'swap',
  fallback: ['sans-serif', 'Helvetica', 'Arial'],
}) 

export const RAMA_GOTHIC = ramaGothic.style.fontFamily;
export const BARLOW = barlow.style.fontFamily;

export const globalStyles = css`

`

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#f0c2c3',
          paper: '#FAFAFA',
        },
        primary: {
          main: '#f0c2c3',
          light: '#82BDFD',
          dark: '#003060',
          contrastText: '#FAFFFD',
        },
        secondary: {
          main: '#053e8c',
          light: '#FABAD1',
          dark: '#990D3F',
          contrastText: '#FFFFFF',
        },
        error: {
          main: '#F44336',
          dark: '#E31B0C',
          light: '#F88078',
          contrastText: '#FFFFFF',
        },
        info: {
          main: '#2196F3',
          dark: '#0B79D0',
          light: '#64B6F7',
          contrastText: '#FFFFFF',
        },
        warning: {
          main: '#ED8F02',
          dark: '#CD7B00',
          light: '#FAB651',
          contrastText: '#FFFFFF',
        },
        success: {
          main: '#75CF66',
          dark: '#3F9E2F',
          light: '#ACEEA1',
          contrastText: '#FFFFFF',
        },
        text: {
          primary: '#d54900',
          secondary: '#f0c2c3',
          disabled: '#999999',
        },
        divider: '#0000001F',
        action: {
          focus: '#C4C4C4',
          active: '#0000008A',
        },

      }
    },
    dark: {
      palette: {
        background: {
          default: '#8E8E93',
          paper: '#8E8E93',
        },
        primary: {
          main: '#1C1C1E',
          light: '#82BDFD',
          dark: '#003060',
          contrastText: '#FAFFFD',
        },
        secondary: {
          main: 'gray',
          light: '#FABAD1',
          dark: '#990D3F',
          contrastText: '#FFFFFF',
        },
        error: {
          main: '#F44336',
          dark: '#E31B0C',
          light: '#F88078',
          contrastText: '#FFFFFF',
        },
        info: {
          main: '#2196F3',
          dark: '#0B79D0',
          light: '#64B6F7',
          contrastText: '#FFFFFF',
        },
        warning: {
          main: '#ED8F02',
          dark: '#CD7B00',
          light: '#FAB651',
          contrastText: '#FFFFFF',
        },
        success: {
          main: '#75CF66',
          dark: '#3F9E2F',
          light: '#ACEEA1',
          contrastText: '#FFFFFF',
        },
        text: {
          primary: '#FAFFFD',
          secondary: '#FAFFFD',
          disabled: '#999999',
        },
        divider: '#0000001F',
        action: {
          focus: '#C4C4C4',
          active: '#0000008A',
        }
      }
    }
  },
  typography: {
    fontFamily: RAMA_GOTHIC,
    body1: {
      fontSize: '16px',
      letterSpacing: '0.2px',
      lineHeight: '25px',
      fontFamily: BARLOW,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: BARLOW,
    },
    caption: { fontSize: '12px', lineHeight: '20px' },
    subtitle1: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '18px',
      lineHeight: '28px',
    },
    subtitle2: {
      fontFamily: BARLOW,
      fontSize: '14px',
      lineHeight: '22px',
    },
    overline: {
      fontFamily: BARLOW,
      fontSize: '12px',
      lineHeight: '32px',
    },
    button: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '15px',
      lineHeight: '24px',
      textTransform: 'capitalize',
    },
    h1: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '80px',
      lineHeight: '112px',
    },
    h2: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '60px',
      lineHeight: '72px',
    },
    h3: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '48px',
      lineHeight: '56px',
    },
    h4: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '34px',
      lineHeight: '42px',
    },
    h5: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '24px',
      lineHeight: '32px',
    },
    h6: {
      fontFamily: RAMA_GOTHIC,
      fontSize: '20px',
      lineHeight: '32px',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        img: { verticalAlign: 'middle' },
        svg: { height: 'auto' },
        a: { textDecoration: 'none', color: 'inherit' }
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          fontSize: '3.5rem',
          fontWeight: 200,
          marginBottom: '0.5rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: '#E31B0C' },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 760,
      lg: 1200,
      xl: 1500,
    },
  },
  spacing: [20]
})

export default theme;
import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface Palette {
    footer?: Palette['primary'];
  }
  interface PaletteOptions {
    footer?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#EC407A',
    },
    secondary: {
      main: '#8a3f93',
    },
    background: {
      default: '#090A0F',
    },
    footer: {
      main: '#111',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

export default theme;

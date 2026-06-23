import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4fd1c5',
      light: '#81e6d9',
      dark: '#38b2ac',
    },
    secondary: {
      main: '#63b3ed',
      light: '#90cdf4',
      dark: '#4299e1',
    },
    background: {
      default: '#0c0c0c',
      paper: '#141414',
    },
    text: {
      primary: '#e8e8e8',
      secondary: '#8a8a8a',
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: "'Sora', sans-serif",
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 12,
          padding: '10px 24px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
})

export default theme

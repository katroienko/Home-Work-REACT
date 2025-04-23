import '../../styles/styles.css'
import './App.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        background: {
          default: mode === 'light' ? '#f5f5f5' : '#121212',
          paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
      },
    }), [mode]
  );

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            maxWidth: 400,
            width: '100%',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Typography variant="h4" gutterBottom>
            {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
          </Typography>
          <Button
            sx= {{backgroundColor: 'darkred'}}
            variant="contained"
            onClick={toggleTheme}
          >
            Toggle Theme
          </Button>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;

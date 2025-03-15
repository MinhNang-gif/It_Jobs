import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles'; // Dùng ThemeProvider thay vì CssVarsProvider
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}> {/* Dùng ThemeProvider */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

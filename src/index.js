import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { yellow, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: grey[800]
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

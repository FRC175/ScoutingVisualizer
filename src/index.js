import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { yellow, grey } from '@mui/material/colors';
import { createMuiTheme } from '@mui/material';
import {Helmet} from 'react-helmet';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: grey[800]
    }
  }
})


const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    primary: {
      main: "#FFDF2E"
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Helmet>
     <style>{'body { background-color: #222222; }'}</style>
    </Helmet> */}
    {/* <ThemeProvider theme={themeDark}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

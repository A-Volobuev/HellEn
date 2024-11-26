import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/system';
import './index.css';
import App from './components/App';
import {theme} from './components'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


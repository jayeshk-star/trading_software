import React from 'react';
import './index.css';
import App from './App';
import { StateProvider } from './utils/store';
import { Components } from './utils/material-ui';
import theme from './utils/theme';
import { createRoot } from 'react-dom/client';

const { ThemeProvider, CssBaseline } = Components;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StateProvider>
      <App />
    </StateProvider>
  </ThemeProvider>
);

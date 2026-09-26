import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';
import { initTheme } from './theme';
import './styles/global.css';
import './styles/shell.css';
import './styles/components.css';
import './styles/sections.css';

// Apparence avant le premier rendu React : le thème enregistré est déjà appliqué par `index.html`,
// cette initialisation le reprend et met en place le suivi du mode « système ».
initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

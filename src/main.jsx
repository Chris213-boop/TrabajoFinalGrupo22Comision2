import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router';
//import { ProductosProvider } from './assets/contexts/ProductosContext.jsx';
import { ProductosProvider } from './assets/contexts/ProductosAPIContext.jsx';
import { AutProvider } from './assets/contexts/AutorizacionesContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutProvider>
      <ProductosProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductosProvider>
    </AutProvider>
  </StrictMode>,
)

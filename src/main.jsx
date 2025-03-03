import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'; // Apenas BrowserRouter
import { Router } from './routes'; // Importe seu componente Router criado

import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />  {/* Seu Router personalizado */}
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer theme='dark' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)

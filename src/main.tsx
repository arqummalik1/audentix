import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { initializeErrorHandlers } from './lib/errorHandler'

// Initialize global error handlers
const cleanup = initializeErrorHandlers();

// Clean up on page unload
window.addEventListener('beforeunload', cleanup);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)

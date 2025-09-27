import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safe root element check
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found');
  document.body.innerHTML = `
    <div style="
      min-height: 100vh; 
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      color: white; 
      font-family: system-ui, -apple-system, sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Application Error</h1>
        <p style="margin-bottom: 1rem;">Unable to initialize the application. Please refresh the page.</p>
        <button 
          onclick="window.location.reload()" 
          style="
            background: linear-gradient(135deg, #3b82f6, #8b5cf6); 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 8px; 
            cursor: pointer; 
            font-size: 1rem;
          "
        >
          Refresh Page
        </button>
      </div>
    </div>
  `;
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to render app:', error);
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh; 
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%); 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        color: white; 
        font-family: system-ui, -apple-system, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">Render Error</h1>
          <p style="margin-bottom: 1rem;">Failed to render the application. Please refresh the page.</p>
          <button 
            onclick="window.location.reload()" 
            style="
              background: linear-gradient(135deg, #3b82f6, #8b5cf6); 
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 8px; 
              cursor: pointer; 
              font-size: 1rem;
            "
          >
            Refresh Page
          </button>
        </div>
      </div>
    `;
  }
}
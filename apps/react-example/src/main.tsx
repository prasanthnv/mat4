import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mat4/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider> {/* You can change to "dark" if needed */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)

// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bulma
import './bulma.css'

// App
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <footer>
      音声：
      <a href="https://voicevox.hiroshiba.jp/" target="_blank">
        VOICEVOX:ずんだもん
      </a>
    </footer>
  </StrictMode>,
)

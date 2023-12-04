import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { VideoProvider } from './contexts/VideoListContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VideoProvider>
    <App />
    </VideoProvider>
  </React.StrictMode>,
)

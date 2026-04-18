import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'
import './src/index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

// Hydrate if the server pre-rendered real elements into the root;
// fall back to createRoot for dev server (where only the comment placeholder exists).
if (rootElement.firstElementChild !== null) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

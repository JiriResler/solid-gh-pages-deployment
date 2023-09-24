import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SessionProvider } from "@inrupt/solid-ui-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionProvider sessionId="some-id">
      <App />
    </SessionProvider>
  </React.StrictMode>,
)

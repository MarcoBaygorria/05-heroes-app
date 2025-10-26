import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Hola mundo</h1>
    <Button>
      Hola de nuevo
    </Button>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NotesContextProvider } from './context/NoteContext.jsx'


createRoot(document.getElementById('root')).render(
  <NotesContextProvider>
     <StrictMode>
    <App />
  </StrictMode>,
  </NotesContextProvider>
 
)

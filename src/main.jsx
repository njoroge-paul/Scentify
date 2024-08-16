import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter as Router} from 'react-router-dom';
import App from './components/App'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router base="/" >
   <App />
   </Router>
  </StrictMode>,
)

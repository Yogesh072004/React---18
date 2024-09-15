import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NetflixRegister } from './components/NetflixRegister.jsx'
// import './index.css'
import NetflixIndex from './components/NetflixIndex.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NetflixIndex/>
  </StrictMode>,
)


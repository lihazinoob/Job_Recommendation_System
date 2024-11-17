import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';
// import App from './App.jsx'
// import TopMenuBar from './Components/JobSeeker/JobsSection/TopMenuBar.jsx'
import MainLayout from './Components/JobSeeker/JobsSection/MainLayout.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./portfolio.jsx/app.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './portfolio.jsx/portfolio.css'
createRoot(document.getElementById('root')).render(
    <App />
)

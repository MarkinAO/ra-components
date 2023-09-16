import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const items = [
  {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
    imgSrc: 'src/assets/item-black.jpg'
  },
  {
    brand: 'Tiger of Sweden',
    title: 'Walter coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 449,
    currency: '£',
    imgSrc: 'src/assets/item-blue.jpg'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App item={items} />
    </>    
  </React.StrictMode>,
)

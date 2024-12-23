import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custum React!</h1>
    </div>
  )
}

const element = (
  <a href="https://www.google.com" target='_blank'>Click here to get Google</a>
)

const customElement = React.createElement(
  'a',
  {href:"https://www.google.com", target:'_blank'},
  'click here'
)

createRoot(document.getElementById('root')).render( 
    // <MyApp />
    // MyApp()
    customElement 
)

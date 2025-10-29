import React from 'react'
import Showcase from './Components/Showcase'
import Page from './Components/Page1'
import Plans from './Components/Plans'
import Firm from './Components/firm'
import Hub from './Components/Hub'
import Ready from './Components/Ready'
import Footer from './Components/Footer'
import Headerr from './Components/Headerr'

const App = () => {
  return (
    <div>
      <Headerr/>
      <Showcase/>
      <Page/>
      <Plans/>
      <Firm/>
      <Hub/>
      <Ready/>
      <Footer/>
    </div>
    
  )
}

export default App
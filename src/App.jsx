import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <HomePage/>
 
       <ContactForm/>
        <Footer/>
       
       
    </>
  )
}

export default App

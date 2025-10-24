import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import AboutSection from './components/AboutSection'

function App() {
 

  return (
    <>
       <Navbar/>
       <HomePage/>
 
       <AboutSection/>
       <ContactForm/>

        <Footer/>
       
       
    </>
  )
}

export default App

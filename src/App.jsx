import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import AboutSection from './components/AboutSection'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
 

  return (
    <>
       <Navbar/>
       <HomePage/>
 
       <AboutSection/>
       <ContactForm/>

        <Footer/>
       
        <ScrollToTopButton /> 
    </>
  )
}

export default App

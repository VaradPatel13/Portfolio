
import './App.css'
import About from './components/About'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className=" min-h-screen font-poppins">
        <Navbar />
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Experience/>
        <Education/>
        <Certificates/> 
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}


export default App

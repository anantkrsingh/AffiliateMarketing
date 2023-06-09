import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Comps/NavBar/Navbar'
import Footer from './Comps/Footer/Footer'
import Teams from './Pages/Teams'
import ContactPage from './Pages/Contact/ContactPage'
import About from './Pages/About'
import Gallery from "./Pages/Gallery"
import Register from "./Pages/RegisterForm/Register"
import { analytics } from '../src/Firebase'
import Scope from './Comps/Scope/Scope'
import Services from './Pages/Services'




function App() {
  return (
    <div className="App align-center ">
      <Navbar />
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/scope' element={<Scope />} />
          <Route path='/register' element={<Register />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
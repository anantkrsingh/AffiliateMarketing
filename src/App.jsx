import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Comps/NavBar/Navbar'
import Footer from './Comps/Footer/Footer'
import Teams from './Pages/Teams'
import Events from './Pages/Events'
import ContactPage from './Pages/Contact/ContactPage'
import About from './Pages/About'
import Gallery from "./Pages/Gallery"
import Register from "./Pages/RegisterForm/Register"
import { analytics } from '../src/Firebase'
import Scope from './Comps/Scope/Scope'
import Client from './Pages/Client'



function App() {
  return (
    <div className="App align-center">
      <Navbar />
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/service' element={<Events />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/scope' element={<Scope />} />
          <Route path='/register' element={<Register />} />
          <Route path='/client' element={<Client />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar }from './components/Navbar'
import {Footer}  from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'
import { Membership } from './components/Membership'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

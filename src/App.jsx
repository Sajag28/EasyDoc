import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Diagnosis from './pages/Diagnosis'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/'             element={ <Home        /> } />
          <Route path='/diagnosis'    element={ <Diagnosis   /> } />
          <Route path='/appointment'  element={ <Appointment /> } />
          <Route path='/about'        element={ <About       /> } />
          <Route path='/contact'      element={ <Contact     /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
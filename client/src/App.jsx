import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navigation from './components/Header/Navigation'
import About from './components/about/About'
import Rooms from './components/catalog/Rooms'
import CatalogDetails from './components/catalogDetails/CatalogDetails'



import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'

import CreateReservation from './components/createReservation/CreateReservation'
import Reservations from './components/reservations/Reservations'
import ReservationDetails from './components/details/ReservationDetails'

function App() {


  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:roomId/details' element={<CatalogDetails />} />

        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/:reservationId/details" element={<ReservationDetails />} />
        <Route path='/create-reservation' element={<CreateReservation />} />


      </Routes>

      <Footer />
    </>
  )
}

export default App

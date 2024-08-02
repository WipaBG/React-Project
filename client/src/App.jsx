import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navigation from './components/Header/Navigation'
import About from './components/about/About'
import Rooms from './components/catalog/Rooms'
import CatalogDetails from './components/catalogDetails/CatalogDetails/'


import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'

import AddComments from './components/catalogDetails/add-comment/AddComments'
import CreateReservation from './components/createReservation/CreateReservation'
import Reservations from './components/reservations/Reservations'
import ReservationDetails from './components/details/ReservationDetails'

function App() {


  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/rooms/:roomId/details' element={<CatalogDetails />}></Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/reservations/:reservationId/details" element={<ReservationDetails />}></Route>
        <Route path='/create-reservation' element={<CreateReservation />}></Route>


        <Route path='/add-comment' element={<AddComments />}></Route>
      </Routes>








      <Footer />
    </>
  )
}

export default App

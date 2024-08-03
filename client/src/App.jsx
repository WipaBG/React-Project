import './App.css'

import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navigation from './components/Header/Navigation'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import CatalogDetails from './components/catalogDetails/CatalogDetails'



import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'

import CreateReservation from './components/createReservation/CreateReservation'
import Reservations from './components/reservations/Reservations'
import ReservationDetails from './components/details/ReservationDetails'
import { AuthContext } from './contexts/AuthContext'

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state)=>{
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  };

  return (

    <AuthContext.Provider value={contextData} >
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Catalog />} />
        <Route path='/rooms/:roomId/details' element={<CatalogDetails />} />

        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/:reservationId/details" element={<ReservationDetails />} />
        <Route path='/create-reservation' element={<CreateReservation />} />


      </Routes>

      <Footer />
    </AuthContext.Provider >
  )
}

export default App

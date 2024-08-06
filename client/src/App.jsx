import './App.css'

import { Routes, Route } from 'react-router-dom'

import EnchancedHeader from './components/Header/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import CatalogDetails from './components/catalogDetails/CatalogDetails'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'




import Footer from './components/footer/Footer'

import CreateReservation from './components/createReservation/CreateReservation'
import Reservations from './components/reservations/Reservations'
import ReservationDetails from './components/details/ReservationDetails'
import { AuthContextProvider } from './contexts/AuthContext'
import ReservationEdit from './components/reservationEdit/ReservationEdit'
import PrivateGuard from './components/common/PrivateGuard'

function App() {



  return (

    <AuthContextProvider>
      <EnchancedHeader />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Catalog />} />
        <Route path='/rooms/:roomId/details' element={<CatalogDetails />} />

        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route element={<PrivateGuard />}>
          <Route path='reservations' element={<Reservations />}></Route>
        </Route>
        <Route path="/reservations/:reservationId/details" element={<ReservationDetails />} />
        <Route path="/reservations/:reservationId/edit" element={<ReservationEdit />} />
        <Route path='/create-reservation' element={<CreateReservation />} />
        <Route path='/logout' element={<Logout />} />


      </Routes>

      <Footer />
    </AuthContextProvider>
  )
}

export default App

import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navigation from './components/Header/Navigation'
import About from './components/about/About'
import Rooms from './components/catalog/Rooms'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'
import AddComments from './components/add-comment/AddComments'
import CreateReservation from './components/createReservation/CreateReservation'
import Reservations from './components/reservations/Reservations'

function App() {
  const roomsData = [
    { name: 'Room 1', reservations: [1, 2, 3] },
    { name: 'Room 2', reservations: [5, 6, 7] },
    { name: 'Room 3', reservations: [10, 11, 12] },
    { name: 'Room 4', reservations: [15, 16, 17] },
    { name: 'Room 5', reservations: [20, 21, 22] },
    { name: 'Room 6', reservations: [25, 26, 27] },
    { name: 'Room 7', reservations: [28, 29, 30] },
    { name: 'Room 8', reservations: [4, 14, 24] },
    { name: 'Room 9', reservations: [9, 19, 29] },
    { name: 'Room 10', reservations: [13, 18, 23] }
  ];

  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/reservations" element={<Reservations rooms={roomsData} />}></Route>
        <Route path='/create-reservation' element={<CreateReservation />}></Route>
        <Route path='/add-comment' element={<AddComments />}></Route>
      </Routes>








      <Footer />
    </>
  )
}

export default App

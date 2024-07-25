import './App.css'
import Home from './components/home/Home'
import Navitation from './components/Header/Navigation'
import About from './components/about/About'
import Rooms from './components/catalog/Rooms'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'
import AddComments from './components/add-comment/AddComments'
import Reservations from './components/reservations/Reservations'

function App() {

  return (
    <>
      <Navitation />
      <Home/>
      <Rooms/>
      <Login/>
      <Register/>
      <About/>
      <AddComments/>
      <Reservations/>
      <Footer/>
    </>
  )
}

export default App

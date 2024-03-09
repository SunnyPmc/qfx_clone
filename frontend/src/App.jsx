import Carousel from "./components/Carousel"
import ComingSoon from "./components/ComingSoon"
import Navbar from "./components/Navbar"
import NowShowing from "./components/NowShowing"
import Socials from "./components/Socials"
import Cmitems from "./components/cmItems"
import Footer from "./components/Footer"
import Login from "./components/Login"

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
   <div>
   <Navbar/>
   {/* <Login/> */}
   <Carousel/>
   <NowShowing/>
   <Cmitems/>
   <ComingSoon/>
    <Socials/>
    <Footer/>
   </div>
  )
}

export default App



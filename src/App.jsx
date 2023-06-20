import {Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Projectspage from "./pages/Projectspage"
import {Navbar} from "./components/"
import Contactpage from "./pages/Contactpage"

const App = () => {
  return (
    <>
    
    <Navbar/> 
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/work' element={<Projectspage/>}/>
        <Route path='/about' element={<Home />}/>
        <Route path='/contact' element={<Contactpage/>}/>
        <Route />
      </Routes>
    </>

  )
}

export default App

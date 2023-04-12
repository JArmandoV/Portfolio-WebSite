import {Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Projectspage from "./components/pages/Projectspage"
import Title from './components/pages/Title'
import {Navbar} from "./components/"
import Contactpage from "./components/pages/Contactpage"

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

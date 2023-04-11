import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Title from './components/pages/Title'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/title" element={<Title/>}/>
        <Route />
      </Routes>
    </BrowserRouter>

  )
}

export default App

import './App.css'
import SoilAnalysis from './pages/SoilAnalysis'
import Home from './pages/Home'
import CropCure from './pages/CropCure'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/soilanalysis" element={<SoilAnalysis/>}/>
        <Route path="/cropcure" element={<CropCure/>}/>
      </Routes>
      </div>

    </>
  )
}

export default App

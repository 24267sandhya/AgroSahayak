import './App.css'
import SoilAnalysis from './pages/SoilAnalysis'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import CropCureProductDetail from './pages/CropCureProductDetail'


function App() {

  return (
    <>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/soilanalysis" element={<SoilAnalysis/>}/>
        <Route exact path="/cropcureproductdetail" element={<CropCureProductDetail/>}/>
      </Routes>
      </div>

    </>
  )
}

export default App

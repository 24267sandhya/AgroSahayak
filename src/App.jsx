import './App.css'
import SoilAnalysis from './pages/SoilAnalysis'
import Home from './pages/Home'
import CropPlan from './pages/CropPlan'
import NextTask1 from './pages/NextTask1'
import NextTask2 from './pages/NextTask2'
import NextTask3 from './pages/NextTask3'
import NextTask4 from './pages/NextTask4'
import NextTask5 from './pages/NextTask5'
import NextTask6 from './pages/NextTask6'
import NextTask7 from './pages/NextTask7'
import Community from './pages/Community'
import Mypost from './pages/Mypost'
import { Route, Routes } from "react-router-dom"
import CropCureProductDetail from './pages/CropCureProductDetail'
import ForSale from './pages/ForSale'
import ForRent from './pages/ForRent'
import ProductDetails from './pages/ProductDetails'
import MyDukaan from './pages/MyDukaan'


function App() {

  return (
    <>
        <div>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/soilanalysis" element={<SoilAnalysis/>}/>
        <Route exact path="/cropcureproductdetail" element={<CropCureProductDetail/>}/>
        <Route exact path="/cropcure" element={<CropCure/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

import './App.css'
import SoilAnalysis from './pages/SoilAnalysis'
import Home from './pages/Home'
import CropCure from './pages/CropCure'
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
        <Route path="/cropcureproductdetail" element={<CropCureProductDetail/>}/>
        <Route path="/cropcure" element={<CropCure/>}/>
        <Route path="/forsale" element={<ForSale/>}/>
        <Route path="/forrent" element={<ForRent/>}/>
        <Route path="/mydukaan" element={<MyDukaan/>}/>
        <Route path="/productdetails" element={<ProductDetails/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

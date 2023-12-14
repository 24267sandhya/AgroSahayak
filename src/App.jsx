import './App.css'
import SoilAnalysis from './pages/SoilAnalysis'
import Home from './pages/Home'
<<<<<<< HEAD
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
=======
import CropCure from './pages/CropCure'
>>>>>>> 0073ac84ce4d66e5b0bb6be2be1e24d661de3848
import { Route, Routes } from "react-router-dom"
import CropCureProductDetail from './pages/CropCureProductDetail'


function App() {

  return (
    <>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/soilanalysis" element={<SoilAnalysis/>}/>
<<<<<<< HEAD
        <Route path="/CropPlan" element={<CropPlan/>}/>
        <Route path="/NextTask1" element={<NextTask1/>}/>
        <Route path="/NextTask2" element={<NextTask2/>} />
        <Route path="/NextTask3" element={<NextTask3 />} />
        <Route path="/NextTask4" element={<NextTask4 />} />
        <Route path="/NextTask5" element={<NextTask5 />} />
        <Route path="/NextTask6" element={<NextTask6/>} />
        <Route path="/NextTask7" element={<NextTask7 />} />
        <Route path="/Community" element={<Community/>} />
        <Route path="/Mypost" element={<Mypost/>}/>
=======
        <Route exact path="/cropcureproductdetail" element={<CropCureProductDetail/>}/>
        <Route exact path="/cropcure" element={<CropCure/>}/>
>>>>>>> 0073ac84ce4d66e5b0bb6be2be1e24d661de3848
      </Routes>
      </div>

    </>
  )
}

export default App

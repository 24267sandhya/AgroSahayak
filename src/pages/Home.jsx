import { Link } from 'react-router-dom';
import Heading from "../components/Heading"
import { PiPottedPlantFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { PiListBulletsFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { BsCloudUploadFill } from "react-icons/bs";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BiSolidFirstAid } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <Heading/>

        <div className="bg-green-300 w-340 h-123 rounded-lg flex  p-4 space-x-4 border-2 border-black">
          <div className="w-80 space-y-2">
            <p>Gurugram, 27 Jul</p>
            <p className="font-bold text-2xl">35°C</p>
            <p >35°C/28°C</p>
            <p>Precipitation:14%</p>
          </div>
          <div className="w-30">
            <img className="w-40 rounded-full border-2 border-blue-800" src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" alt="" />
            <div className="border-solid border-2 rounded-xl mt-2 border-black text-black text-center rounded-md ">
              Partly Cloudy
            </div>
          </div>
        </div>

        <div className="bg-green-300 w-340 h-123 rounded-lg flex p-4 space-x-4 border-2 border-black">
          <div className="w-80 mt-10">
            <div className="bg-amber-950  h-8 text-white text-center rounded-full mx-7 ">
              <Link to="/soilanalysis" className="text-xl">Soil Analysis</Link>
            </div>
            <div className=''>
                <Link to="/Community" className="text-xl">Community</Link>
            </div>
          </div>
          <div className="w-30">
            <img className="w-40 rounded-full border-2 border-green-800" src="https://www.caro.ca/wp-content/uploads/2020/06/soiltesting-CARO.png" alt="" />
          </div>
        </div>

        <div className="bg-white w-300 h-50 flex flex-row ml-5">
          <div className="mr-4">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/agriculture-farming-gardening/grain-rice-icon.svg" className="w-14 h-12 rounded-full border-solid border-2 border-black "/>
            <h className="ml-1">Wheat</h>
          </div>
          <div className="mr-4">
            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-paddy-png-image_2390874.jpg" className="w-14 h-12 rounded-full border-solid border-2 border-black"/>
            <h className="ml-1">Paddy</h>
          </div>
          <div className="mr-4">
            <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-clean-smooth-soil-free-vegetable-potatoes-png-image_5546916.jpg" className="w-14 h-12 rounded-full border-solid border-2 border-black"/>
            <h className="ml-1">Potato</h>
          </div>
          <div className="mr-4">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/tomato-icon.svg" className="w-14 h-12 rounded-full border-solid border-2 border-black"/>
            <h className="ml-1">Tomato</h>
          </div>
          <div className="w-14 h-12 rounded-full mr-4 border-solid border-2 border-black">
            <div className="ml-1">
              <AiOutlinePlus className="h-11 w-11" />
              <Link to="/CropPlan" className="h-11 w-11">Add</Link>
            </div>
          </div>
        </div>

        <div className="bg-green-300 w-340 h-123 rounded-t-lg p-2 space-x-4 border-2 border-black">
          <div className="w-300 space-x-4 flex flex-row">
            <div className="w-80 space-y-3">
              <div className="flex flex-row">
                <div className="mt-4">
                  <PiPottedPlantFill/>    
                </div>
                <p className="mt-2.5 ml-1.5 text-lg">Wheat</p>
              </div>
              <div className="flex flex-row">
                <div className="mt-2">
                  <SlCalender/>    
                </div>
                <p className="mt-0.5 ml-1.5 text-lg">50-41 days before sowing</p>
              </div>
              <div className="flex flex-row">
                <div className="mt-1.5">
                  <PiListBulletsFill/>    
                </div >
                <p className="ml-1.5 text-lg">Introduction</p>
              </div>
            </div>
            <div className="w-30">
              <img className="object-contain w-30 h-30" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/forecasting-crop-yield-6016438-5048173.png" alt="" />
            </div>

          </div>
          
          
        </div>
        <div className="bg-blue-300 w- h-50 relative bottom-4 p-2 rounded-b-lg flex flex-row border-2 border-t-0 border-black">
            <div>
              <div className="flex flex-row">
                <FaLocationDot/>
                <p>Khandsa road</p>
              </div>
              <p className="text-lg font-bold ">Sabji Mandi</p>
            </div>
            
            <div>
              <p className="text-blue-900 font-bold ml-9 mt-3">Market Price:₹2200/Q</p>
            </div>
            <div className="mt-4 ml-1">
              <FaArrowDown/>
            </div>
        </div>
        
        
        <Link to="/cropcure" className="bg-green-300 w-340 h-123 rounded-lg flex p-2 space-x-4 bottom-4 relative border-2 border-black">
          <div className="w-80">
            <div className="bg-green-800 w-20 text-white pl-1 rounded-md ">
              <a href="https://plant-disease-recognition-app-agrosahayak.streamlit.app/Prediction">Crop cure</a>
            </div>
            <div>
              <div className="flex flex-row">
                <div className="mt-1">
                  <BsCloudUploadFill/>
                </div>
                <p className="ml-2">Upload picture of crop</p>
              </div>
              <div className="ml-10">
                <BsArrowDown/>
              </div>
              <div className="flex flex-row">
                <div className="mt-1">
                  <BsFillClipboardCheckFill/>
                </div>
                <p className="ml-2">See Diagnosis</p>
              </div>
              <div className="ml-10">
                <BsArrowDown/>
              </div>
              <div className="flex flex-row">
                <div className="mt-1">
                  <BiSolidFirstAid/>
                </div>
                <p className="ml-2">Get treatment</p>
              </div>
            </div>
            
          </div>
          <div className="w-40 mt-3 ">
            <img className="w-40 h-30 rounded-full border-2 border-green-800" src="https://as2.ftcdn.net/v2/jpg/01/32/18/81/1000_F_132188136_kwCGATtnrW0pjZ4ZVaUZsjrqZHrL0hzb.jpg" alt="" />
          </div>
        </Link>

        
      </div>
     </div>
    </div>
  )
}

export default Home
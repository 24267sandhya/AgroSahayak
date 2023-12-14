import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { PiPlantBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsNewspaper } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="bg-gray-800 p-4 rounded-b-lg sticky bottom-0">
  <div class="container mx-auto flex justify-center items-center">
    <div class="flex space-x-8">
      
      <div class="text-white">
      <AiFillHome />
      </div>

      
      <div class="text-white">
      <PiPlantBold />
      </div>

      
      <div class="text-white">
      <FaShoppingCart />
      </div>

      
      <div class="text-white">
      <IoIosPeople />
      </div>

      
      <div class="text-white">
      <BsNewspaper />
      </div>

      
      <div class="text-white">
      <BsGraphUpArrow />
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer

import React, {useState} from 'react'
import imgoff from "../Assets/Bulb_off.jpg.jpg"
import imgon from "../Assets/Bulb_on.jpg.jpg"

export default function Hello() {
  const [bulbImg, setBulbImg]=useState(imgoff);
  
  function bulbOn() {
    setBulbImg(imgon) 
}

  function bulbOff() {
    setBulbImg(imgoff)
}
  
  return (
    <div>
      <h1>Bulb Activity</h1>
      
    <button onClick={bulbOn}>Bulb on</button>

  <img id="bulb" src={bulbImg} style={{height:300}} alt=""/>

<button onClick={bulbOff}>Bulb Off</button>


    </div>
  )
}

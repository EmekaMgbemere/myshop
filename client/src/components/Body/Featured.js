import React, { useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Featured() {
  

  return (
    <div className='newtrendbest'>
         <div>
            <span className=''>TRENDING</span>
        </div>
        <div className='center '>
            <div className='bg-danger p-4 trending'></div>
            <div className='bg-success p-4 trending'></div>
        </div>
    </div>
  )
}

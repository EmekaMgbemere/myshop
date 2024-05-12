import React, { createContext } from 'react';
import Data from "../../components/mockDATA.json";

 export const CreatedApi = createContext("https://jsonplaceholder.typicode.com/users");
 export const defaultapi = createContext('http://localhost:6969')
 export const MockData = createContext(Data);
 const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5 
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1  
  }
};
export const Responsiveness = createContext(responsive);

export const contextObject = { CreatedApi, defaultapi, MockData, Responsiveness };

export default function Apipage() {

  return (
    <>
      <div>


      </div>
    </>
  );
}




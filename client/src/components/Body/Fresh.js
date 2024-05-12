import React, { useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MockData, Responsiveness } from '../../components/Body/Apipage';


export default function Fresh () {

    const mockapi = useContext(MockData);

    const responsive = useContext(Responsiveness);

    const gigi = mockapi.map((userData, todo) => (
                <div className='newtrendbestitems'>
                    <div key={todo} className='newitems'>
                      <p className='text-danger'><img src={userData.avatar} alt='avatar'/></p>
                      <p className='text-danger'>{userData.first_name}</p>
                      <p className='text-success'>{userData.last_name}</p>
                    </div>
                </div>
              ))

              
    
  return (
    
    <>
    <div className='newtrendbest'>
          <div>
                <span >FRESH</span>
          </div>
          <div id='newitemsid'>
          <Carousel
                  // centerMode={true}
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} 
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="transform 0.8s ease-in-out"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-10-px"
                  >
                  {gigi}
                  
            </Carousel>
        </div>
    </div>

    </>
  ) 
}

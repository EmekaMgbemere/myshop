import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Body/Hero';
import Fresh from './Fresh';
import Trending from './Trending';
import Bestselling from './Bestselling';
import Footer from '../Footer/Footer';
import Featured from './Featured';
function Home(){

    return(
        <div>
            <div>
                <Nav />
            </div>

                <div>
                    <Hero />
                </div>

            <div  className='container'>
                <div>
                    <Fresh />
                </div>

                <div>
                    <Trending />
                </div>
                
                <div>
                    <Featured />
                </div>

                <div>
                    <Bestselling />
                </div>
            </div>
            <div>
                <Footer />
            </div>
               
        </div>
    )
}

export default Home;
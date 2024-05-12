import React from 'react';


function Hero(){

    return(
        <>
        <div className='herobody'>
            <form className='heroform'>
                <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
                <input type="radio" name="fancy" value="hearts" id="hearts" />
                <input type="radio" name="fancy" value="spades" id="spades" />
                <input type="radio" name="fancy" value="diamonds" id="diamonds" />			
                <input type='radio' name="fancy" value="images" id="images" />			
                <label for="clubs">&#9827; Clubs</label><label for="hearts">&#9829; Hearts</label><label for="spades">&#9824; Spades</label><label for="diamonds">&#9830; Diamonds</label><label for="images"> images</label>
            </form>  
         </div> 
         
        </>
    )
}

export default Hero;
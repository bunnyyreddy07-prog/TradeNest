import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 border-bottom mb-5">
            <div className='row text-center mt-5 p-3'>
            <h1>TradeNest Products</h1>
            <h4 className='mt-3 text-muted' >Sleek, modern, and intuitive trading platforms</h4>
            <p className='mt-3 mb-5'>Check out our<a href='' style={{textDecoration: 'none'}}> investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;
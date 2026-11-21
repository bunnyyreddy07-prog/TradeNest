import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h3>Support portal</h3>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3">
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg. how do i activate F&O"/><br/>
            <a href="" style={{marginLeft:"5px"}}>Track account opening</a>
            <a href="" style={{marginLeft:"5px"}}>Track segment activation</a>
            <a href="" style={{marginLeft:"5px"}}>Intraday margins</a>
            <a href="" style={{marginLeft:"5px"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
            <h1 className='fs-3'>Featured</h1>
            <ol>
                <li><a href="">Current takeovers and delisting</a><br/></li>
                <li><a href="">Latest intraday leverages</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

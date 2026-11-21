import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/pavan.jpeg"
            alt="Team"
            style={{ borderRadius: "100%", width: "60%", height: "auto" }}
          />
          <h4 className="mt-3">Ushike Pavan Reddy</h4>
          <h5>Co-founder & CEO</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            TradeNest was created with a vision to make investing simple, transparent, and accessible for everyone. Whether you're a beginner taking your first step into the stock market or an experienced investor managing a diversified portfolio, TradeNest provides the tools and insights to help you invest with confidence.
            <br />
            Beyond technology, TradeNest is committed to fostering financial awareness and helping individuals build long-term wealth through smart investing, innovation, and trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

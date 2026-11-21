import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="fs-2">Charges</h1>
        <h3 className="text-muted mt-5 fs-5">
          List of all charges and taxes
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-lg-4 p-5">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Equity"
            className="img-fluid mb-4"
            style={{ height: "180px" }}
          />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 p-5">
          <img
            src="/media/images/intradayTrades.svg"
            alt="Intraday"
            className="img-fluid mb-4"
            style={{ height: "180px" }}
          />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity. Flat ₹20 on
            all option trades.
          </p>
        </div>

        <div className="col-lg-4 p-5">
          <img
            src="/media/images/pricingEquity.svg"
            alt="Mutual Funds"
            className="img-fluid mb-4"
            style={{ height: "180px" }}
          />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
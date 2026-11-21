import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row p-5 text-center">
        <h1>The TradeNest Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="partner-logo"
          />
          <p className="text-muted mt-3">Thematic investment platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            className="partner-logo"
          />
          <p className="text-muted mt-3">Algo and strategy platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="partner-logo"
          />
          <p className="text-muted mt-3">Options trading platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Fund House"
            className="partner-logo"
          />
          <p className="text-muted mt-3">Asset management</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="partner-logo"
          />
          <p className="text-muted mt-3">Bonds trading platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            className="partner-logo"
          />
          <p className="text-muted mt-3">Insurance</p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
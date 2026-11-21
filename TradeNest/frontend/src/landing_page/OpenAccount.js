import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h3 className="mt-5 fs-2 mb-4">Open a TradeNest account</h3>
        <p className="text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <div className="text-center">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;

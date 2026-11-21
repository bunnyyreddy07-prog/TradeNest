import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  text,
}) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        {/* Text Section */}
        <div className="col-lg-1"></div>

        <div className="col-lg-5">
          <h1>{productName}</h1>

          <p className="mt-4">{productDescription}</p>

          <div className="mt-3">
            <a
              href={learnMore}
              className="text-decoration-none"
            >
              {text}{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
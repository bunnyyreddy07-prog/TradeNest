import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center">
        {/* Left Image */}
        <div className="col-lg-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-1"></div>

        <div className="col-lg-5">
          <h1>{productName}</h1>

          <p className="mt-4">{productDescription}</p>

          <div className="mt-4">
            <a
              href={tryDemo}
              className="text-decoration-none"
            >
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href={learnMore}
              className="text-decoration-none ms-5"
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="me-4"
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
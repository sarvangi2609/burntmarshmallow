import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
  
        </div>


        <div className="carousel-inner">

          <div className="carousel-item slide1">
            <img
              src="https://ak1.ostkcdn.com/img/mxc/04242025-MOPS-A3-DSK_fullWidth_04.22.svg?imwidth=1920"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item slide2">
            <img
              src="https://ak1.ostkcdn.com/img/mxc/04242025-MOPS-A3-DSK_fullWidth_04.22.svg?imwidth=1920"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item slide3">
            <img
              src="https://ak1.ostkcdn.com/img/mxc/04242025-MOPS-A3-DSK_fullWidth_04.22.svg?imwidth=1920"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item slide4">
            <img
              src="https://ak1.ostkcdn.com/img/mxc/04242025-MOPS-v2-A4-DSK_fullWidth_04.22.svg?imwidth=1920"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item slide5 active">
            <img
              src="https://ak1.ostkcdn.com/img/mxc/20250426_MOPS_1400x550_Domestic_Desktop_A1_BBBDays.svg?imwidth=1920"
              className="d-block w-100"
              height={442}
              alt="..."
            />
          </div>


        </div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;

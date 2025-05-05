import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const HeroSection = () => {
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

export const LimitedPro = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "300px" }}>

          <div className="carousel-item active">

            <div className="inner-carousel d-flex justify-content-between">
              <div className="inner-slide1">
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/02102025-MOPS-exclusiveSavings.svg?imwidth=1920"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="inner-slide2">
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_25.svg?imwidth=1920"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="inner-slide3">
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_20.svg?imwidth=1920"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="inner-slide4">
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_20.svg?imwidth=1920"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

          </div>

          <div className="carousel-item">

            <div className="inner-carousel d-flex justify-content-between">

            <div className="inner-slide3">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_20.svg?imwidth=1920"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="inner-slide4">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_20.svg?imwidth=1920"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="inner-slide5">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_20.svg?imwidth=1920"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="inner-slide6">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/11192024-MOPS-Upto_20.svg?imwidth=1920"
                className="d-block w-100"
                alt="..."
              />
            </div>


            </div>
           

          </div>

        </div>

        <button
          className="carousel-control-prev bg-dark"
          style={{ height: "44px", width: "34px", marginTop: "10%" }}
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
          className="carousel-control-next bg-dark"
          style={{ height: "44px", width: "34px", marginTop: "10%" }}
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

export const HostingPro = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "300px" }}>

          <div className="carousel-item active">

            <div className="inner-carousel d-flex justify-content-between">
 
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_CookingSets_44318371.jpg?imwidth=480"
                  className="d-block w-100"
                  alt="..."
                  height={295}
                  width={295}
                />



                <img
                  src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_Dinnerware_25490660.jpg?imwidth=480"
                  className="d-block w-100"
                  alt="..."
                  height={295}
                  width={295}
                />
 


                <img
                  src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_OutDecor_38028131.jpg?imwidth=480"
                  className="d-block w-100"
                  alt="..."
                  height={295}
                  width={295}
                />



                <img
                  src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_OutLighting_40123415.jpg?imwidth=480"
                  className="d-block w-100"
                  alt="..."
                  height={295}
                  width={295}
                />


            </div>

          </div>

          <div className="carousel-item">

            <div className="inner-carousel d-flex justify-content-between">


              <img
                src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_OutDecor_38028131.jpg?imwidth=480"
                className="d-block w-100"
                alt="..."
                height={295}
                width={295}
              />



              <img
                src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_OutLighting_40123415.jpg?imwidth=480"
                className="d-block w-100"
                alt="..."
                height={295}
                width={295}
              />



              <img
                src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_ShadesStructures_38852887.jpg?imwidth=480"
                className="d-block w-100"
                alt="..."
                height={295}
                width={295}
              />



              <img
                src="https://ak1.ostkcdn.com/img/mxc/04152025_MOPS_340x340_Domestic_OutDining_17256281.jpg?imwidth=480"
                className="d-block w-100"
                alt="..."
                height={295}
                width={295}
              />



            </div>
           
          </div>

        </div>

        <button
          className="carousel-control-prev bg-dark"
          style={{ height: "44px", width: "34px", marginTop: "10%" }}
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
          className="carousel-control-next bg-dark"
          style={{ height: "44px", width: "34px", marginTop: "10%" }}
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

export const TrendingPro = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide group 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="1"
          aria-label="Slide group 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark2"
          data-bs-slide-to="2"
          aria-label="Slide group 3"
        ></button>
      </div>

      <div className="carousel-inner" style={{height:"500px"}}>
        <div className="carousel-item active">
          <div className="row g-0">
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial1.jpg?imwidth=1920" className="d-block w-100" alt="Slide 1" />
              <h2>Home Gym</h2>
              <p>Exercise equipment and more for your healthy home oasis.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial3.jpg?imwidth=1920" className="d-block w-100" alt="Slide 2" />
              <h2>Storage & Organization</h2>
              <p>Save time and space with deals on storage solutions.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial4.jpg?imwidth=1920" className="d-block w-100" alt="Slide 3" />
              <h2>Entertainment Centers</h2>
              <p> Elevate your entertainment with these tasteful TV stands.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial6.jpg?imwidth=1920" className="d-block w-100" alt="Slide 4" />

            <h2>Mattresses</h2>
            <p>Sleep soundly again with a perfectly plush mattress.</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row g-0">
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial3.jpg?imwidth=1920" className="d-block w-100" alt="Slide 5" />
              <h2>Storage & Organization</h2>
              <p>Save time and space with deals on storage solutions.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial4.jpg?imwidth=1920" className="d-block w-100" alt="Slide 6" />
              <h2>Entertainment Centers</h2>
              <p> Elevate your entertainment with these tasteful TV stands.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial6.jpg?imwidth=1920" className="d-block w-100" alt="Slide 7" />
              <h2>Mattresses</h2>
              <p>Sleep soundly again with a perfectly plush mattress.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial7.jpg?imwidth=1920" className="d-block w-100" alt="Slide 8" />
              <h2>Kitchen Appliances</h2>
              <p> Save on small appliances and convenient kitchen gadgets.</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row g-0">
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial4.jpg?imwidth=1920" className="d-block w-100" alt="Slide 9" />
              <h2>Entertainment Centers</h2>
              <p> Elevate your entertainment with these tasteful TV stands.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial6.jpg?imwidth=1920" className="d-block w-100" alt="Slide 10" />
              <h2>Mattresses</h2>
              <p>Sleep soundly again with a perfectly plush mattress.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial7.jpg?imwidth=1920" className="d-block w-100" alt="Slide 11" />
              <h2>Kitchen Appliances</h2>
              <p> Save on small appliances and convenient kitchen gadgets.</p>
            </div>
            <div className="col-6 col-md-3 trend-slide">
              <img src="https://ak1.ostkcdn.com/img/mxc/12222023_WinterEvergreen_HomePageEditorial8.jpg?imwidth=1920" className="d-block w-100" alt="Slide 12" />
              <h2>Living Room Seating</h2>
              <p>Relax in style with cozy sofas, chairs, and more.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};













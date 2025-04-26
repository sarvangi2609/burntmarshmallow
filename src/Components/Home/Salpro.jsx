import React from "react";
import { Link } from "react-router-dom";

const Salpro = () => {
  return (
    <>
      <div className="salpro">

        <div className="left">
          <div className="card">
            <div
              style={{
                height: "40px",
                padding: "50px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "24px",
                }}
              >
                BB&B Days Flash Sale
              </Link>
            </div>

            <div
              style={{
                backgroundColor: "#002855",
                color: "#FFFFFF",
                width: "70%",
                height: "35px",
                textAlign: "center",
                lineHeight: "35px",
                borderRadius: "10px",
                margin: "auto",
                marginTop: "40px",
              }}
            >
              Shop All
            </div>
          </div>
        </div>

        <div className="right">
            <div className="card">
                
            </div>
        </div>
      </div>
    </>
  );
};

export default Salpro;

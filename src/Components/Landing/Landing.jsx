import React, { useState } from "react";
import "./Landing.css";

function Landing() {
  let [value, setValue] = useState(1);

  const increaseValue = () => {
    if (value < 10) {
      setValue(++value);
      console.log("setValue", value);
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
      console.log("setValue", value);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="container kig">
          <div className=" d-flex responsive">
            <div className="row  justify-content-center">
              <div className="col-md-4 responsive">
                <div className="vid_div">
                  <img src="card.jpeg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-md-4 responsive scnd">
                <div className="logo">
                  <img src="logo.png" className="img-fluid w-50" alt="" />
                </div>
                <div className="heding">
                  <h5 className="text-white">GENESIS KING CROWN</h5>
                  <p>BNB</p>
                </div>

                <div className="light">
                  <img src="coin.jpeg" className="img-fluid " alt="" />
                </div>
                <div className="blck d-flex justify-content-center">
                  <div className="btn plus" onClick={() => decreaseValue()}>
                    -
                  </div>{" "}
                  <div className="enput text-center"
                    value={value} onChange={(e) => setValue(e.target.value)}
                  >{value}</div>{" "}
                  <div className="btn plus" onClick={() => increaseValue()}>
                    +
                  </div>{" "}
                </div>

                <div className="mint" style={{ cursor: "pointer" }}>
                  <img src="mint.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

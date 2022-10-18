import React, { useState } from 'react';
import './Landing.css';
// import KingLogo from "./logo.png"


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
    <div className='main_div'>
        {/* <div className="connected_div">

          {
            connect ? <> <img src={connected} alt="" width="25%" /> </> : <><img src={notcoonect} alt="" width="25%" /></>
          }
        </div> */}
        <div className="">
          <div className="container kig">
            {/* <img src={connected} alt="" /> */}
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-7 d-flex responsive">
                <div className="row justify-content-center">
                  <div className="col-md-6 responsive">

                    {/* <video src="light.mp4" className='w-100 '></video> */}
                    <div className="vid_div">
                      {/* <video src="Dark.mp4" className='w-100 '></video> */}
                      
                      {/* <video autoPlay="autoPlay" loop width="100%" id='vid'>
                        <source src="light.mp4" type="video/mp4" />

                      </video> */}

                      <img src="card.jpeg" className='img-fluid' alt="" />

                      <div className="">
                        {/* <img src="LIGHT.png" className='img-fluid w-100' alt="" /> */}
                      </div>

                    </div>


                  </div>

                  <div className="col-md-6 responsive scnd">
                    <div className="logo">
                      <img src='logo.png' className='img-fluid w-50' alt="" />
                    </div>

                    {/* <div className="bttn">
                      <div className="btn fst_bttn active_bnb " id="" onClick={() => (setchange_contract("bnb"))}>BNB</div>
                      <div className="btn fst_bttn active_eth" id="" onClick={() => setchange_contract("ETH")}>ETH</div>
                    </div> */}

                    <div className="heding">
                      <h4 className='text-white pt-3'>GENESIS KING CROWN</h4>
                      <p>BNB
                      </p>
                    </div>

                    <div className="light">
                      <img src="LIGHT.png" className='img-fluid ' alt="" />
                    </div>

                    {/* <div className="bttn">
                      <div className="btn scnd_bttn actiggve" onClick={() => navigate('/')}>LIGHT THEME</div>
                      <div className="btn scnd_bttn" onClick={() => navigate('/Dark_Mood')}>DARK THEME</div>
                    </div> */}

                    <div className="blck">
                      <div className="btn plus" onClick={() => decreaseValue()}>-</div>{" "}
                      <input type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />{" "}
                      <div className="btn plus" onClick={() => increaseValue()}>+</div>{" "}
                    </div>

                    <div className="mint" style={{ cursor: "pointer" }}>
                      
                          <img src="mint.png" alt="" />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Landing
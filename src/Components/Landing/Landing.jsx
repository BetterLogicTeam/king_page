import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadWeb3 } from "../apis/api";
import { bnbContractAddress, bnbNftContractAbi } from "../utilies/constant";
import "./Landing.css";

function Landing() {
  let [value, setValue] = useState(1);
  const [ValueBNB, setValueBNB] = useState("")

  const increaseValue = () => {
    // if (value < 10) {
    // }
    setValue(++value);
    console.log("setValue", value);
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
      console.log("setValue", value);
    }
  };



  const Mint_With_BNB = async () => {
    let acc = await loadWeb3();

    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {


      try {
        // setButtonOne("Please Wait While Processing")

        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(bnbNftContractAbi, bnbContractAddress);
        let mintingWirePrice
        let own_Address = await nftContractOf.methods.owner().call()
       
        if (own_Address == acc) {
          mintingWirePrice = 0;
        } else {
          mintingWirePrice = await nftContractOf.methods.minting_price().call()
          mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
          setValueBNB(mintingWirePrice)
          mintingWirePrice = parseFloat(mintingWirePrice);
          mintingWirePrice = value * mintingWirePrice
          mintingWirePrice = web3.utils.toWei(mintingWirePrice.toString());
        }
        // console.log("mintingWirePrice", mintingWirePrice);

        let hash = await nftContractOf.methods.mint( value).send({
          from: acc,
          value: mintingWirePrice
        })
        toast.success("Transaction Confirmed")
       


      } catch (e) {
        console.log("Error while minting ", e)
        toast.error("Transaction failed")


      }

    }
  }

  const getValue=async()=>{
    try{
      const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(bnbNftContractAbi, bnbContractAddress);
       let mintingWirePrice = await nftContractOf.methods.minting_price().call()
       mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
       setValueBNB(mintingWirePrice)
       console.log("mintingWirePrice",mintingWirePrice);

    }catch(e){
      console.log("Error While get BNB value",e);
    }
  }
  // const minting_live_price = async () => {
  //   try {

  //     const web3 = window.web3;
  //     let nftContractOf = new web3.eth.Contract(bnbNftContractAbi, bnbContractAddress);
  //     let Value_in_bnb = await nftContractOf.methods.minting_price().call()
  //     Value_in_bnb = web3.utils.fromWei(Value_in_bnb);
  //     setValueBNB(Value_in_bnb)



  //   } catch (e) {
  //     console.log("Erroe while get BNB value", e);
  //   }
  // }

  useEffect(() => {
    getValue()

  }, [])
  



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
                  <p>{ValueBNB} BNB</p>
                </div>

                <div className="light">
                  <img src="coin.jpeg"  width="100%" alt="" />
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
                  <img src="mint.png" alt="" onClick={()=>Mint_With_BNB()} />
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

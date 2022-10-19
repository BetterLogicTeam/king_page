import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing'
import { useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';

function App() {

  // const connectWallte = async () => {
  //   try {
  //     let acc
    
  //     if (acc == "No Wallet") {
       
  //       toast("No Wallet")  }
  //     else if (acc == "Wrong Network") {
        
  //      } else {
  //         let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
  //     }

  //   } catch (e) {
  //     console.log("Error while Connect Walte", e);
  //   }
  // }

  // useEffect(() => {
  //   connectWallte()
  // }, [])
  
  return (
    <div className="App">
       {/* <ToastContainer /> */}
      <Landing />
    </div>
  );
}

export default App;


import './App.css';

import {useSate, useEffect} from "react"


function App() {

  const numInput = (e) =>{

  };
  const operatorType = (e) =>{

  };
  const equals = (e) =>{

  };
  const percentage = () =>{

  };
  const plusMinus = () =>{

  };
  const reset = () =>{

  };








  return (
    <div className="container">
      <div className= "wrapper">
    <div className="screen"></div>
    <div className="greys btn" onClick={reset}> AC </div>
    <div className="greys btn" onClick={percentage}> % </div>
    <div className="greys btn" onClick={plusMinus}> +/- </div>
    <div className="oranges btn" onClick={operatorType}> / </div>
    <div className=" darks btn" onClick={numInput}> 7 </div>
    <div className=" darks btn" onClick={numInput}> 8 </div>
    <div className=" darks btn" onClick={numInput}> 9 </div>
    <div className="oranges btn" onClick={operatorType}> x </div>
    <div className="  btn" onClick={numInput}> 4 </div>
    <div className="  btn" onClick={numInput}> 5 </div>
    <div className="  btn" onClick={numInput}> 6 </div>
    <div className="oranges btn" onClick={operatorType}> + </div>
    <div className="  btn" onClick={numInput}> 1 </div>
    <div className="  btn" onClick={numInput}> 2 </div>
    <div className="  btn" onClick={numInput}> 3 </div>
    <div className="oranges btn" onClick={operatorType}> - </div>
    <div className="btn darks-zeros " onClick={numInput}> 0 </div>
    <div className="  btn" onClick={numInput}> . </div>
    <div className=" oranges darks btn" onClick={equals}> = </div>

     </div>

    </div>
  );
}

export default App;

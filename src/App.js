
import './App.css';

import {useState, useEffect} from "react"


function App() {

  const [val, setVal ] = useState("0") //the display value
  const [iniState, setIniState ] = useState("")
  const [finState, setFinState ] = useState("")
  const [calOperator, setCalOperator ] = useState(null)
  const [result, setResult ] = useState(false)


  const numInput = (e) =>{
      if (finState.includes(".") && e.target.innerText === ".") return; // this wont allow the dot button to be clicked twice

      if(result){
        setIniState("") // we set it to nothing because we want the cal to know that once we press the result/equal to we dont want it to continue calculating underground
      }

      finState ? 
      setFinState ((pre) => pre + e.target.innerText) : 
      setFinState(e.target.innerText)
      //  i did this because i want to be able to click a button twice and get the value
      setResult(false)
  };

useEffect(()=>{

  setVal("0")
  
}, [])

useEffect(()=>{
setVal(finState)
  
}, [finState])

  const operatorType = (e) =>{

  };
  const equals = (e) =>{

  };
  const percentage = () =>{

  };
  const plusMinus = () =>{

  };
  const reset = () =>{
      setVal("0")
      setIniState("")
      setFinState("")
  };


  return (
    <div className="container">
      <div className= "wrapper">
    <div className="screen">{val}</div>
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

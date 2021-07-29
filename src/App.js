import './App.css';
import { useState } from 'react';

const App = () => {
  const [result, setResult] =useState(" ");

  const handleClick = (val) =>{
    setResult(result.concat(val.target.name));
  }

  const backSpace = () => {
    setResult(result.slice(0,-1)); //you can use this on as well result.length-1
  }

  const clearInput = () => {
    setResult("");
  }

  const calculateResult = () =>{
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error");
    }
  }

  return (
    <div className="App">
     <div className="cal-main">

       <div className="input">
        <input type="text" value={result}/>
       </div>
       <div className="buttons">
         <button id="cancel" onClick={clearInput}> Clear</button>
         <button id="backspace" onClick={backSpace}>C</button>
         <button id="operator" name="+" onClick={handleClick}> +</button>
         <button name="9" onClick={handleClick}>9 </button>
         <button name="8" onClick={handleClick}>8 </button>
         <button name="7" onClick={handleClick}>7 </button>
         <button id="operator" name="-" onClick={handleClick}>- </button>
         <button name="6" onClick={handleClick}>6 </button>
         <button name="5" onClick={handleClick}>5 </button>
         <button name="4" onClick={handleClick}>4 </button>
         <button id="operator" name="*" onClick={handleClick}>* </button>
         <button name="3" onClick={handleClick}>3 </button>
         <button name="2" onClick={handleClick}>2 </button>
         <button name="1" onClick={handleClick}>1 </button>
         <button id="operator" name="/" onClick={handleClick}>/ </button>
         <button name="0" onClick={handleClick}>0 </button>
         <button id="operator" name="." onClick={handleClick}>. </button>
         <button id="results" onClick={calculateResult}>= </button>
       </div>

     </div>
    </div>
  );
}

export default App;

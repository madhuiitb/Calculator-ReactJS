import './App.css';
import { useState } from 'react';

const App = () => {
  const [result, setResult] =useState(" ");

  /*
    ______________________________________________________________________________
  __________________________________________________________________________________
  This defines the OnClick event for Button values:
  Once you click on the button it will call to handleClick function
  Here, it will concatanate the values which are clicked to setResult
  __________________________________________________________________________________
   _______________________________________________________________________________
  */
  const handleClick = (val) =>{
    setResult(result.concat(val.target.name));
  }
  /*
    ______________________________________________________________________________
  __________________________________________________________________________________
  This defines the OnClick event for the Back Space:
  Once you click on the "C" button it will call to backSpace function
  Here, it will remove the latest value from input text and set setResult
  __________________________________________________________________________________
   _______________________________________________________________________________
  */

  const backSpace = () => {
    setResult(result.slice(0,-1)); //you can use this on as well result.length-1
  }

    /*
    ______________________________________________________________________________
  __________________________________________________________________________________
  This defines the OnClick event for the Clear Input:
  Once you click on the "Clear" button it will call to clearInput function
  Here, it will remove all the values from input and set setResult to the empty
  __________________________________________________________________________________
   _______________________________________________________________________________
  */
  const clearInput = () => {
    setResult("");
  }
    /*
    ______________________________________________________________________________
  __________________________________________________________________________________
  This defines the OnClick event for the calculate the Result:
  Once you click on the "=" equal button it will call to calculateResult function
  Here, it will evalute the values from result and set setResult
  But, one condition here we may enter many symbols so it should return the error
  __________________________________________________________________________________
   _______________________________________________________________________________
  */

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

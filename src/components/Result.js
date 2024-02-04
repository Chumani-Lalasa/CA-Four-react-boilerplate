import React from 'react'
import './Result.css'

export default function Result({onRestart,switchMode,backGround}) {
  console.log(backGround);
  let result = localStorage.getItem('score')
  console.log(result);
  const handleRestart = () => {
    onRestart();
  }
  return (
     <div style={{backgroundColor: backGround=='white' ? 'white':'black'}} className='ResultComponent'>
      <div className='top-container'>
        <div>
          <h2 className='logo-text' style={{color:backGround=='white'?'black':'white'}}>Quiz App</h2>
        </div>
        <div>
          <button className='modeButton' onClick={switchMode}>{backGround=='white' ? 'Dark':'Light'}</button>
        </div>
        </div>

      
      <div className='result-container'>
        <div>
        <h1>Result</h1>
        </div>
        <div>
        <h2>{result} of 5 correct - {result*20} %</h2>
        </div>
        <div>
        <button onClick={handleRestart} className='restartButton'>Restart game</button>
        </div>
      </div>
    </div>
  )
   
  
}

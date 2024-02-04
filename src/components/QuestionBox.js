import React, { useState } from 'react'
import './QuestionBox.css'
import Result from './Result.js'

export default function QuestionBox(questions) {
  const [que,setQue] = useState(0)
  const [score,setScore] = useState(0)
  const [color,setColor] = useState('#00BBF9')
  const [backGround, setBackground] = useState('white')
  
  const switchMode = () => {
    setBackground((backGround) => (backGround=="white" ? "black" : "white"))
  }
  const handleQuestion = (isCorrect) => {
    console.log(isCorrect);
    if(isCorrect){
      setScore((score) => (score+1))
    }else{
      setScore((score) => score)
    }
    if(que<=4){
    setQue((prevQue) => (prevQue+1))
    }
  }
  localStorage.setItem("score",JSON.stringify(score))

  const toggleColor = () => {
    setColor(color === '#00BBF9' ? '#F80A0A' : '#F80A0A');
  };
  const removeHighlight = () => {
    setColor(color === '#F80A0A' ? '#00BBF9' : '#00BBF9');
  }
  const handleRestart = () => {
    setQue(0);
    setScore(0);
  }
  if (que === 5) {
    return <Result onRestart={handleRestart} switchMode={switchMode} backGround={backGround}/>;
  }
  return (
    <div style={{backgroundColor:backGround}} className='QuestionBoxComponent'>
      <div className='page-container'>
        <div className='mode'>
      <h2 style={backGround=='white'?{color:"black"}:{color:'white'}} className='logo'>Quiz App </h2>
        <button className='switchMode' onClick={switchMode}>{backGround=='white' ? 'Dark' : 'Light'}</button>
        </div>

            <div className='container'>

            <div className='top-section'>

                <div className='Question-section'>
                    <h1 className='page'>Question <span>{que+1}</span> of 15</h1>
                </div>
                <h2 className='Question' style={{color}}>{questions.data[que].text}</h2>

            </div>
            <div className='bottom-section'>
                <div className='option-section'>
                    <div className="section">
                    <div className='option-button' onClick={() => {handleQuestion(questions.data[que].options[0].isCorrect)}}><input type="button" className="option1" value={questions.data[que].options[0].text}/></div>
                    <div className='option-button' onClick={() => {handleQuestion(questions.data[que].options[2].isCorrect)}}><input type="button" className="option3" value={questions.data[que].options[2].text}/></div>
                    </div>
                  <div className='section'>
                  <div className='option-button' onClick={() => {handleQuestion(questions.data[que].options[1].isCorrect)}}><input type="button" className="option2" value={questions.data[que].options[1].text}/></div>
                    <div className='option-button' onClick={() => {handleQuestion(questions.data[que].options[3].isCorrect)}}><input type="button" className="option4" value={questions.data[que].options[3].text}/></div>
                  </div>
                </div>
                <div className='button-section'>
                    <div className='button'><button className='highlight-btn' onClick={toggleColor}>Highlight</button></div>
                    <div className='button'><button className='remove-btn' onClick={removeHighlight}>Remove Highlight</button></div>
                </div>
            </div>
      </div>
        </div>
    </div>
  )
}

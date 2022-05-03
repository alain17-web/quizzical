import './App.css';
import React from 'react'
import Intro from './components/Intro';
import Quizz from './components/Quizz'


function App() {

  const [isStarted,setIsStarted] = React.useState(false)
  
  
  function startQuizz(){
    setIsStarted(true)
  }

  

  return (
    <div className='container'>
      {isStarted === false ? <Intro startQuizz={startQuizz}/> : <Quizz/>}
      <div className={isStarted === false ? 'yellow' : 'yellowQuizz'}></div>
      <div className={ isStarted === false ? 'blue' : 'blueQuizz'}></div>
      
    </div>
  );
}

export default App;

import './App.css';
import React from 'react'
import Intro from './components/Intro';

function App() {

  const [isStarted,setIsStarted] = React.useState(false)

  function startQuizz(){
    setIsStarted(true)
  }

  return (
    <div className='container'>
      <div className='yellow'></div>
      <div className='blue'></div>
      {isStarted === false && <Intro startQuizz={startQuizz}/>}
    </div>
  );
}

export default App;

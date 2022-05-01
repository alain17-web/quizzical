import React from 'react'

function Intro(props){
    return (
        <div className='intro'>
            <h1 className='title'>Quizzical</h1>
            <p className='description'>Go ahead ! Do your worst and good luck!</p>
            <button className='start' onClick={props.startQuizz}>Start Quizz</button>
        </div>
    )
}

export default Intro
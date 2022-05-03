import React from 'react'
import he from 'he'
import {nanoid} from 'nanoid'


function Quizz(props) {

    
    const [quizzData, setQuizzData] = React.useState({})
    const [quizz,setQuizz] = React.useState({
        id: nanoid()
      })
    

    React.useEffect(() => {
        async function getQuizz() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=hard")
            const data = await res.json()
            setQuizzData(data.results)
        }
        getQuizz()
    }, [])

    // console.log(quizzData)

    const answers = []
    
    
    

    const styles = {backgroundColor: props.isClicked ? '#D6DBF5' : '#F5F7FB'}

    

    if(!quizzData.length) return <h2 className='loading'>loading...</h2>

    

    const quizzElements = quizzData.map(quizz => (
       
        <div>
            <h1 className='question' key={quizz.id}>{he.decode(quizz.question)}</h1>
            <button className='answer' key={quizz.id} onClick={props.clickAnswer} style={ styles}>{he.decode(quizz.correct_answer)}</button>
            <button className='answer' key={quizz.id} onClick={props.clickAnswer} style={ styles}>{he.decode(quizz.incorrect_answers[0])}</button>
            <button className='answer' key={quizz.id} onClick={props.clickAnswer} style={ styles}>{he.decode(quizz.incorrect_answers[1])}</button>
            <button className='answer' key={quizz.id} onClick={props.clickAnswer} style={ styles}>{he.decode(quizz.incorrect_answers[2])}</button>
        </div>
        
            ))

            
    return (
        <div className='quizz'>
            {quizzElements}
            <button className='button'>Check answers</button>
        </div>
    )
}

export default Quizz
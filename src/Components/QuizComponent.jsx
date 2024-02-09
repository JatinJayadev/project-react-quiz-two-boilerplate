import Styles from './Quiz.module.css'
import '../resources/quizQuestion'
import { useState } from 'react'
import question from '../resources/quizQuestion'

function QuizComponents() {
    const [state, setState] = useState(0)

    console.log(question[state].question)

    const handleClickPrev = () => {
        if (state == 0) {
            setState(14)
        } else {

            setState(state - 1)
        }
        console.log(state)
    }

    const handleClickNext = () => {
        if (state == 14) {
            setState(0)
        } else (
            setState(state + 1)
        )
        console.log(state)

    }

    const handleExit = () => {
        alert("Do you want to quit")
        setState(0)
        console.log(state)

    }

    return (
        <div className={Styles.container}>
            <h1>Question</h1>
            <p className={Styles.notag}>{state + 1} of {question.length}</p>
            <p className={Styles.questiontag}>{question[state].question}</p>
            <div className={Styles.optcont}>
                <button>{question[state].optionA}</button>
                <button>{question[state].optionB}</button>
                <button>{question[state].optionC}</button>
                <button>{question[state].optionD}</button>
            </div>
            <div className={Styles.footer}>
                <button className={Styles.prev} onClick={handleClickPrev}>Previous</button>
                <button className={Styles.next} onClick={handleClickNext}>Next</button>
                <button className={Styles.quit} onClick={handleExit}>Quit</button>
            </div>
        </div>

    )
}

export default QuizComponents
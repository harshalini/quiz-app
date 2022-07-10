import { useState } from "react";
import { Navbar } from "../layout/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { useQuizQues } from "../context/quizQue-context";

export const QuizPage = () => {
    const { categoryQues, setScore } = useQuizQues();

    const [selectedOption, setSelectedOption] = useState()
    const [currQue, setCurrQue] = useState(0);
    const [disable, setDisable] = useState(true)

    const navigate = useNavigate();

    const getNextQueHandler = () => {
        setCurrQue(que => que + 1)
        setSelectedOption(0)
        if (currQue === 4)
            navigate("/result")
    }

    const checkHandler = (opt) => {
        setSelectedOption(opt)
        if (opt === categoryQues[currQue].correctAns)
            setScore(score => score + 1)
        setDisable(false)
    }

    const selectHandler = (opt) => {
        if (selectedOption === opt)
            return "select"
    }

    const quitHandler = () => {
        const quitAns = prompt("Are you sure? (yes/no)")
        if (quitAns === "yes".toLowerCase()) {
            navigate("/")
            setScore(0)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="qn-div">
                <span className="quiz-name">{categoryQues[currQue].quizCat}</span>
            </div>
            <div className="quiz-div">
                <span className="quiz-question">{categoryQues[currQue].question}</span>
                <div className="question-options">
                    {categoryQues[currQue].options.map(({ opt }) => {
                        return (
                            <button
                                onClick={() => checkHandler(opt)}
                                className={`opt-text ${selectedOption && selectHandler(opt)}`}
                                key={opt}
                                disabled={selectedOption}>
                                {opt}
                            </button>

                        )
                    })}
                </div>
                <div className="quiz-btn">
                    <button
                        className="button quit-btn"
                        onClick={quitHandler}>
                        Quit
                    </button>
                    <button
                        onClick={getNextQueHandler}
                        className={disable ? `button disabled` : `button next-btn`}
                        disabled={disable}>
                        Next question
                    </button>
                </div>
            </div>
        </div>
    )
}
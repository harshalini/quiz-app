import { useQuizQues } from "../context/quizQue-context"
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

export const Result = () => {
    const { score } = useQuizQues();
    const { categoryQues, selectedArr } = useQuizQues();

    const selectHandler = (opt) => {
        for (let i = 0; i < categoryQues.length; i++) {
            if (opt === selectedArr[i] && opt === categoryQues[i].correctAns)
                return "green"
            else if (opt === selectedArr[i] && opt !== categoryQues[i].correctAns)
                return "red"
            else if (opt === categoryQues[i].correctAns)
                return "green"
        }
    }
    return (
        <div>
            <p className="app-name">Vivir Quiz</p>
            <h1 className="score-card">Score Card</h1>
            <div className="score-div">
                <span className="final-score">Your score : {score}/25</span>
            </div>
            {categoryQues.map(({ question, options, id }) => {
                return (
                    <div className="quiz-div" key={id}>
                        <span className="quiz-question">{question}</span>
                        <div className="question-options">
                            {options.map(({ opt }) => {
                                return (
                                    <button
                                        className={`opt-text result-opt ${selectHandler(opt)}`}
                                        key={opt}
                                    >
                                        {opt}
                                    </button>

                                )
                            })}
                        </div>
                        <hr className="que-partition" />
                    </div>
                )
            })}
            <div className="more-social">
                <div className="more-btn">
                    <Link to="/"><button>Play more</button></Link>
                </div>
                <div className="social-handles">
                    <ExternalLink href="https://github.com/harshalini"><AiFillGithub className="social-icon" /></ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/harshalini-pandhare-177240206/"><AiFillLinkedin className="social-icon" /></ExternalLink>
                    <ExternalLink href="https://twitter.com/Harshalini_P"><AiFillTwitterCircle className="social-icon" /></ExternalLink>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import { Categories } from "./categories"
export const QuizCard = () => {
    return (
        <div className="card-flex">
            {Categories.map(({ quizName, desc, img }) => (
                <div className="ui-component card card-with-badge">
                    <div className="card-image">
                        <img src={img} />
                    </div>
                    <div className="card-text">
                        <span>{quizName}</span>
                        <p>{desc}</p>
                        <div className="quiz-btn">
                            <Link to="/"><button>Play now</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
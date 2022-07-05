import { Link } from "react-router-dom"
import { Categories } from "./categories"
export const QuizCard = () => {
    return (
        <div className="card-flex">
            {Categories.map(({ id, quizName, desc, img }) => (
                <div className="ui-component card card-with-badge" key={id}>
                    <div className="card-image">
                        <img src={img} alt="quiz"/>
                    </div>
                    <div className="card-text">
                        <span>{quizName}</span>
                        <p>{desc}</p>
                        <div className="quiz-btn">
                            <Link to= "/rules"><button>Play now</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
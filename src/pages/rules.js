import { Link } from "react-router-dom"

export const Rules = () => {
  return (
    <div className="rules-div">
      <p className="rules-heading">Rules</p>
      <div>
        <ul className="rules-grid">
          <li>
            There are total 5 questions
          </li>
          <li>
            Each question carries 5 marks
          </li>
          <li>
            Player has to attempt every question
          </li>
          <li>
            Player cannot go back to the previous question
          </li>
          <li>
            After submitting the quiz, score will be displayed in the score card
          </li>
          <li className="quiz-luck">
            All the best!...
          </li>
        </ul>
      </div>
      <div className="quiz-btn">
        <Link to="/quiz"><button className="start-btn">Play now</button></Link>
      </div>
    </div>
  )
}
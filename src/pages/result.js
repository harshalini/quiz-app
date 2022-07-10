import { useQuizQues } from "../context/quizQue-context"

export const Result = () => {
    const { score } = useQuizQues();
    return (
        <div className="opt-text">
            This is Result
            Your Score is {score}
        </div>
    )
}
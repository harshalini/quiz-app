import { createContext, useContext, useState } from "react";
import { Questions } from "../backend/db/questions";

const QuizQueContext = createContext();

const QuizQueProvider = ({ children }) => {
    const [currQue, setCurrQue] = useState(0);
    const [categoryQues, setCategoryQues] = useState([]);
    const [score, setScore] = useState(0);
    const [selectedArr, setSelectedArr] = useState([]);
    const choosenCategoryQues = (categoryName) => {
        setCurrQue(0);
        setScore(0);
        const getCatQues = Questions.filter(que => que.quizCat === categoryName)
        setCategoryQues(getCatQues);
    }

    return (
        <QuizQueContext.Provider
            value={{ currQue, categoryQues, choosenCategoryQues, setCurrQue, score, setScore,
            selectedArr,
            setSelectedArr
            }}>
            {children}
        </QuizQueContext.Provider>
    );
};

const useQuizQues = () => useContext(QuizQueContext);

export { useQuizQues, QuizQueProvider };
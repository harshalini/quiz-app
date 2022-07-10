import { Route, Routes } from "react-router-dom";
import { Home, Rules, QuizPage, Result } from "../pages";
export const AppRouter = () => {
    return (
    <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route path="/rules" element = {<Rules />} /> 
        <Route path="/quiz" element = {<QuizPage />} />
        <Route path = "/result" element={<Result />} />
    </Routes>
    )
}
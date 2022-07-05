import { Route, Routes } from "react-router-dom";
import { Home, Rules } from "../pages";
export const AppRouter = () => {
    return (
    <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route path="/rules" element = {<Rules />} /> 
    </Routes>
    )
}
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
export const AppRouter = () => [
    <Routes>
        <Route exact path = "/" element = {<Home />} />
    </Routes>
]
import { QuizCard } from "../components"
import { Navbar } from "../layout/navbar/navbar"
export const Home = () => {
    document.title = "Vivir Quiz"
    return (
        <div>
            <Navbar />
            <QuizCard />
        </div>
    )
}
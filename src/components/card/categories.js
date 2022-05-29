import { v4 as uuid } from "uuid"
export const Categories = [
    {
        id: uuid(),
        quizName: "World Quiz",
        desc: "The geography quiz",
        img: "./assets/world.jpg"
    },
    {
        id: uuid(),
        quizName: "Bollywood Quiz",
        desc: "The filmy quiz",
        img: "./assets/bollywood.jpg"
    },
    {
        id: uuid(),
        quizName: "History Quiz",
        desc: "The indian history quiz",
        img: "./assets/history.jpg"
    }
]
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>,
    },
    {
        path: "/games/:gameId",
        element: <h1>Game</h1>,
    },
])
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import './App.css'

function App(): JSX.Element {
    return (
        <RouterProvider router={router}/>
    )
}

export default App

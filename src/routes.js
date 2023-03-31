import { Route,BrowserRouter, Routes } from "react-router-dom"
import Organizer from "./Screens/Organizer"

const MyRoutes = () =>
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Organizer/>}/>
                <Route path="*" element={<h1>Página não encontrada</h1>} />
           </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
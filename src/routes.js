import { useSelector } from "react-redux"
import { Route,BrowserRouter, Routes } from "react-router-dom"
import Organizer from "./Screens/Organizer"

const MyRoutes = () =>
{
    const backColor = useSelector((state)=>state.TempBackColor.BackColor)

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
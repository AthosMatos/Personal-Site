import { Route,BrowserRouter, Routes } from "react-router-dom"

import ChooseColorMode from "./Screens/NewComerDealer/ChooseColorMode"
import ChosseLanguage from "./Screens/NewComerDealer/ChooseLanguage"
import Home from "./Screens/Home"
import NewComerDealer from "./Screens/NewComerDealer"

const MyRoutes = () =>
{
    return(
        <BrowserRouter>
           <Routes>
                <Route path="/" 
                element ={<NewComerDealer/>}
                />
                <Route 
                path="/Home" 
                element ={<Home/>}
                />
                <Route 
                path="/ChosseLanguage" 
                element ={<ChosseLanguage/>}
                />
                <Route 
                path="/ChooseColorMode" 
                element ={<ChooseColorMode/>}
                />
                <Route path="*" element={<h1>Página não encontrada</h1>} />
           
           </Routes>
                
            
        </BrowserRouter>
    )
}

export default MyRoutes
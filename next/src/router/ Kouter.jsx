import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../templates/DefaultLayout"
import { HeaderOnly } from "../templates/HeaderOnly"

export const Kouter = () =>{
    return(
         <BrowserRouter>
           <Routes>
            <Route path="/" element={
                <DefaultLayout>
                      <Top/>
                </DefaultLayout>
            } />


            <Route path="/users" element={
                <HeaderOnly>
                  <Users/>
                </HeaderOnly>
            } />

           </Routes>
        </BrowserRouter>

    )
}
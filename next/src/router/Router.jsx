import {Route,Routes} from "react-router-dom"

import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page1 } from "../Page1";
import { Home } from "../Home";
import { Page2 } from "../Page2";




export const Router =  () => {
    return(

        <Routes>
        <Route path="/" element={<Home />} />

        <Route path="page1" element={<Page1 />}/>
        <Route path="page1/detailA" element={<Page1DetailA />}/>
        <Route path="page1/detailB" element={<Page1DetailB />} />


        <Route path="page2" element={<Page2 />} />
    </Routes>




    )



};
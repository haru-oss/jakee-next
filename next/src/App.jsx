import './App.css'

import {BrowserRouter,Link,Route,Routes} from "react-router-dom"


// import {useState,useCallback} from 'react'

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page1DetailA } from "./Page1DetailA";
import {Page1DetailB}  from "./Page1DetailB";
import { Page2 } from './Page2';

export const App=()=> {
     return (


        <>


                  <BrowserRouter>
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="page1">Page1</Link>
                    <br />
                    <Link to="page2">Page2</Link>

                  <Routes>
                      <Route path="/" element={<Home />} />

                      <Route path="page1" element={<Page1 />}>
                          <Route path="detailA" element={<Page1DetailA />}/>
                          <Route path="detailB" element={<Page1DetailB />} />
                      </Route>

                      <Route path="page2" element={<Page2 />} />
                  </Routes>

                  </BrowserRouter>

        </>





     );


    }
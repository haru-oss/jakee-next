import './App.css'

import {BrowserRouter,Link} from "react-router-dom"


// import {useState,useCallback} from 'react'

import { Router } from './router/Router';

export const App=()=> {
     return (


        <>


                  <BrowserRouter>
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="page1">Page1</Link>
                    <br />
                    <Link to="page2">Page2</Link>


                    <Router/>


                  </BrowserRouter>

        </>





     );


    }
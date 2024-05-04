import {BrowserRouter,Link} from "react-router-dom"

import { Router } from './router/Router';
import './App.css'



// import {useState,useCallback} from 'react'


export const App=()=> {
     return (




       <BrowserRouter>
           <>
              <Link to="/">Home</Link>
              <br />
              <Link to="page1">Page1</Link>
              <br />
              <Link to="page2">Page2</Link>
           </>
              <Router/>
      </BrowserRouter>






     );


    }
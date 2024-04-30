import './App.css'

import {BrowserRouter,Link} from "react-router-dom"

// import {useState,useCallback} from 'react'

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const App=()=> {
     return (
       <BrowserRouter>
          <div>
            <Link to="/">home</Link>
            <br />
            <Link to="page1">page1</Link>
            <br />
            <Link to="page2">page2</Link>
            <Home/>
            <Page1/>
            <Page2/>
          </div>

      </BrowserRouter>

     )


    };

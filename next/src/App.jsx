import './App.css'

import {BrowserRouter,Link,Route,Routes} from "react-router-dom"

// import {useState,useCallback} from 'react'

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const App=()=> {
     return (



       <BrowserRouter>
          <div>
            {/* Linkは、aタグのような機能を持つ */}
            <Link to="/">Home</Link>
            <br />
            <Link to="page1">Page1</Link>
            <br />
            <Link to="page2">Page2</Link>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Routes>
          {/* <Routes>で囲った要素たちは、「このパスの時は、このコンポーネントを表示する と言った意味の記述をすることができる。」*/}



      </BrowserRouter>
// ルーティングの設定
// 最初に、BrowserRouterというタグで全体を囲う




     )


    };

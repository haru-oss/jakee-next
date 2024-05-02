import {Link} from "react-router-dom"
import { Page1DetailA } from "./Page1DetailA";
import {Page1DetailB}  from "./Page1DetailB"

export const Page1 = () => {
    return(

        // <BrowserRouter>
          <div>
              <h1>Page1</h1>
              <Link to = "/page1/detailA">DetaileA</Link>
              <br />
              <Link to = "/page1/detailB">DetaileB</Link>
          </div>

        //   <Routes>
        //       <Route path="/page1/detailA" element={<Page1DetailA />} />
        //       <Route path="/page1/detailB" element={<Page1DetailB />} />
        //   </Routes>

        /* </BrowserRouter> */
    )
};
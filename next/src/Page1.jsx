import {Link,Outlet} from "react-router-dom"

export const Page1 = () => {
    return(


          <div>
              <h1>Page1</h1>
              <Link to={"DetailA"}>Page1DetailA</Link>
              <br />
              <br />
              <Link to={"DetailB"}>Page1DetailB</Link>
              {/* <Outlet/> */}
          </div>



    )


};
import { Footer } from "../components/atom/layout/Footer"
import { Header } from "../components/atom/layout/Header"

export const DefaultLayout = (props) =>{

    const {children} = props
    return(
        <div>
            <Header/>
            {children}
            <Footer/>




        </div>




)}
import './App.css'
import {  Kouter } from "./router/ Kouter"
import { UserProvider } from './providers/userProvider'


// const user = {
//   name: "ハル",
//   image: "https://source.unsplash.com/Tk9Kz4wGZ1I",
//   email: "haruru@gmail.com",
//     TEL: "088047477773",
// company: {
//   name:"テスト株式会社",
//   website:"httpfgjgj@gamail.com",
// },
// }



export const App=()=> {
     return (
     <UserProvider>
     <Kouter/>
     </UserProvider>



     )




    }
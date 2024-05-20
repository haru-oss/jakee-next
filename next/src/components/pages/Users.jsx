import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCrad } from "../organisms/user/UserCrad"


const users = [...Array(10).keys()].map((val)=>{
    return{

    id:val,
    name: `haru${val}`,
    image: "https://source.unsplash.com/Tk9Kz4wGZ1I",
    email: "haruru@gmail.com",
      TEL: "088047477773",
  company: {
    name:"テスト株式会社",
},
  website:"httpfgjgj@gamail.com",
    }
})





export const Users = () =>{

    return(
        <SUsers>
               <h2>ユーザー一覧</h2>
               <SearchInput/>
            <SUserArea>
               {users.map((obj)=>{
                   return(
                       <UserCrad key = {obj.id} user = {obj} />
                   )
               })}

            </SUserArea>



        </SUsers>
    )
}


const SUsers = styled.div`
display:  flex;
flex-direction:  column;
align-items: center;
padding:24px;

`;


const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns  :repeat(auto-fit,minmax(200px,1fr));
    grid-gap: 20px;



`;
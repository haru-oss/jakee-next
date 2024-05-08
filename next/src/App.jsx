import './App.css'
import { SecondaryButton } from './components/atom/button/SecondaryButton'
import { PrimaryButton } from './components/atom/button/PrimaryButton'
import { SearchInput } from './components/molecules/SearchInput'
import { UserCrad } from './components/organisms/user/UserCrad'



// import {useState,useCallback} from 'react'


export const App=()=> {
     return (
      <>

      <PrimaryButton >テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />

      <SearchInput/>
      <UserCrad/>

      </>

     )




    }
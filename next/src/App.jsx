import './App.css'
import { SecondaryButton } from './components/atom/SecondaryButton'
import { PrimaryButton } from './components/atom/button/PrimaryButton'



// import {useState,useCallback} from 'react'


export const App=()=> {
     return (
      <>

      <PrimaryButton >テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      </>
     )




    }
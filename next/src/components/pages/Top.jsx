import React, { useContext } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import { SecondaryButton } from "../atom/button/SecondaryButton"
import { UserContext } from "../../providers/userProvider";

export const Top = () =>{
    const navigate = useNavigate();

    const {setUserInfo} = useContext(UserContext);

    const onClickAdmin = ()=> {
        setUserInfo({isAdmin: true});
        navigate("/users");
    }
    const onClickGeneral = ()=> {
        setUserInfo({isAdmin: false});
        navigate("/users");
    }





    return(
        <SContainer>
            <h2>Topページです。</h2>

            <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}


const SContainer = styled.div`
text-align: center;


`
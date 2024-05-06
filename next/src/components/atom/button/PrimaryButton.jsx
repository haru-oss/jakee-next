import styled from "styled-components";

export const PrimaryButton = (props) => {
    const {children} = props;
    return(
        <>
        <SButton>{children}</SButton>

        </>
    );
};

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: none;
  border:none;
  border-radius:9999px;
  outline:none;

  &:hover{
    curor: pointer;
    opacity: 0.8;
  }



`;
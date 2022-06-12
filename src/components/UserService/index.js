import React from "react"
import styled from "styled-components"
import { BsPersonPlus, BsPersonCircle, BsBuilding } from "react-icons/bs"

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    margin: 0;
    display: flex;
    color: #919191;
    line-height: 23px;
`

const SignupWrapper = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 5%;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        color: #9c57f5;
    }
`
const LoginWrapper = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 5%;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        color: #9c57f5;
    }
`
const EnterpriseWrapper = styled.div`
    width: 30%;
    height: 100%;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        color: #9c57f5;
    }
`
const UserP = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    // margin-top: 5px;
`

function UserService() {
    return (
        <>
            <Wrapper>
                <SignupWrapper>
                    <BsPersonPlus fontSize={25}/>
                    <UserP>회원가입</UserP>
                </SignupWrapper>
                <LoginWrapper>
                    <BsPersonCircle  fontSize={25}/>
                    <UserP>로그인</UserP>
                </LoginWrapper>
                <EnterpriseWrapper>
                    <BsBuilding  fontSize={25}/>
                    <UserP>기업서비스</UserP>
                </EnterpriseWrapper>
            </Wrapper>
        </>
    )
}

export default UserService
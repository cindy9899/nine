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

const SignupField = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 5%;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        color: #9c57f5;
    }
`
const LoginField = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 5%;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
        color: #9c57f5;
    }
`
const EnterpriseField = styled.div`
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
                <SignupField>
                    <BsPersonPlus fontSize={20}/>
                    <UserP>회원가입</UserP>
                </SignupField>
                <LoginField>
                    <BsPersonCircle  fontSize={20}/>
                    <UserP>로그인</UserP>
                </LoginField>
                <EnterpriseField>
                    <BsBuilding  fontSize={20}/>
                    <UserP>기업서비스</UserP>
                </EnterpriseField>
            </Wrapper>
        </>
    )
}

export default UserService
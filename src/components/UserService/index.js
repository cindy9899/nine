import React from "react"
import styled from "styled-components"
import { BsPersonPlus, BsPersonCircle, BsBuilding } from "react-icons/bs"
import "../../App.css"

const WholeWrapper = styled.div`
    width: 100%;
    display: flex;
`
const UserServiceBox = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 991px){
        padding: 0;
    }
    padding: 1em 0 0 0;
    color: #919191;
    &:hover {
        color: #9c57f5;
    }
    cursor: pointer;
`

const UserServiceText = styled.p`
@media (max-width: 4490px) {
    display: none;
}
    font-size: 3em;
    margin-top: 0.5em;
`

function UserService() {
    return (
        <>
            <WholeWrapper>
                <UserServiceBox>
                    <BsPersonPlus className="userIcon"/>
                    <UserServiceText>회원가입</UserServiceText>
                </UserServiceBox>
                <UserServiceBox>
                    <BsPersonCircle className="userIcon"/>
                    <UserServiceText>로그인</UserServiceText>
                </UserServiceBox>
                <UserServiceBox>
                    <BsBuilding className="userIcon"/>
                    <UserServiceText>기업서비스</UserServiceText>
                </UserServiceBox>
            </WholeWrapper>
        </>
    )
}

export default UserService
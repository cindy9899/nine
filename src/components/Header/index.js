import React from "react"
import styled from "styled-components"
import Logo from "../../data/image/logo.webp"
import SearchButton from "../../data/image/mainSrchBtn.webp"
import UserService from "../UserService"

const HeaderWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin: 0;
`

const LogoWrapper = styled.div`
    width: 15%;
    height: 60px;
    margin: 0;
    line-height: 60px;
`
const Logoimg = styled.img`
    width: 70%;
    height: 33px;
    margin: 0;
    vertical-align: middle;
`
const SearchWrapper = styled.div`
    width: 40%;
    height: 60px;
    margin-right: 25%;
    line-height: 60px;
`
const InputWrapper = styled.div`
    width: 100%;
    height: 35px;
    border: 2px solid transparent;
    margin-top: 10px;
    line-height: 33px;
    border-radius: 20px;
    background: linear-gradient(to right, white, white), linear-gradient( 135deg, #9c57f5,#9babff);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
`
const SearchP=styled.span`
    float: left;
    margin-left: 20px;
    margin-right: 10px;
    font-size: 13px;
`
const Inputfield = styled.input`
    vertical-align: middle;
    width: 250px;
    margin-right: 57px;
    border: 0;
`
const SearchBtn=styled.img`
    height: 80%;
    vertical-align: middle; 
    cursor: pointer;
`
const UserWrapper = styled.div`
    width: 23%;
    height: 60px;
    margin: 0;
    
`

function Header() {
    return (
        <>
            <HeaderWrapper>
                <LogoWrapper>
                    <Logoimg src={Logo} />
                </LogoWrapper>
                <SearchWrapper>
                    <InputWrapper>
                        <SearchP>통합검색</SearchP>
                        <Inputfield  placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"/>
                        <SearchBtn src={SearchButton}/>
                    </InputWrapper>
                </SearchWrapper>
                <UserWrapper>
                    <UserService />
                </UserWrapper>
            </HeaderWrapper>
        </>
    )
}

export default Header
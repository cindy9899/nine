import React from "react"
import styled from "styled-components"
import Logo from "../../data/image/logo.webp"
import SearchButton from "../../data/image/mainSrchBtn.webp"
import UserService from "../UserService"


const WholeWrapper = styled.div`
    height: auto;
    display: flex;
    @media (max-width: 991px) {
        width: 90vw;
        margin: 1vh 0 0 0;
    }
    width: 70vw;
    margin: 2vh 0 0 0;
    
`
// 로고
const LogoWrapper = styled.div`
    width: 15%;
    height: 100%;
    margin-right: 2vw;
`
const LogoImg = styled.img`
    width: 100%;
`

// 검색창
const SearchWrapper = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
`
const SearchBar = styled.div`
    font-size: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(to right, white, white), linear-gradient( 135deg, #9c57f5,#9babff);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    @media (max-width: 991px) {
        height: 2vh;
        border-radius: calc(3vh/2);
        border: 0.2em solid transparent;
        
    }
    @media (max-width: 575px) {
        height: 1vh;
        border-radius: calc(2vh/2);
        border: 0.1em solid transparent;
        
    }
    height: auto;
    border-radius: 4vh;
    border: 0.8em solid transparent;
`
const SearchText = styled.span`
@media (max-width: 2650px) {
    font-size: 4em;
}
@media (max-width: 2200px) {
    font-size: 3em;
}
@media (max-width: 1630px) {
    font-size: 1em;
}
@media (max-width: 575px) { //모바일
    font-size: 1px;
    
}
    font-size: 5em;
    margin-left: 1em;
    margin-right: 2%;
`
const SearchInput = styled.input`
    border: none;
    @media (max-width: 2650px) {
        font-size: 4em;
    }
    @media (max-width: 2200px) {
        font-size: 3em;
    }
    @media (max-width: 1630px) {
        font-size: 1em;
    }
    @media (max-width: 575px) {
        font-size: 0.5em;
    }
    width: 60%;

    font-size: 5em;
`
const SearchBtn = styled.img`
    @media (max-width: 991px) {
        width: 6%;
    }
    width: 8%;
    margin: 0.5em 0;
    margin-left: auto;
    margin-right: 0.5%;
    cursor: pointer;
`


// 유저서비스 이동
const UserServiceWrapper = styled.div`
    width: 18%;
    height: 100%;
    margin-left: auto;
`




function HeaderSearch() {
    return (
        <>
            <WholeWrapper>
                <LogoWrapper>
                    <LogoImg src={Logo} />
                </LogoWrapper>
                <SearchWrapper>
                    <SearchBar>
                        <SearchText>통합검색</SearchText>
                        <SearchInput placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"/>
                        <SearchBtn src={SearchButton} />
                    </SearchBar>
                </SearchWrapper>
                <UserServiceWrapper>
                    <UserService />
                </UserServiceWrapper>
            </WholeWrapper>
        </>
    )
}

export default HeaderSearch
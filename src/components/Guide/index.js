import React from "react"
import styled from "styled-components"
// import { GiHamburgerMenu } from "react-icons/gi"
import Gnb from "../../data/image/gnb.webp"

const GuideWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin: 0;
    margin-bottom: 20px;
    align-items: center;
`
const BurgerWrapper = styled.div`
    width: 5%;
    height: 50px;
    margin-right: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Burger = styled.img`
    width: 100%;
    cursor: pointer;
`
const GuideBtnWrapper = styled.div`
    width: 45%;
    height: 60px;
    margin-right: 23%;
    align-items: center;
    display: flex;
`
const GuideBtnSpan = styled.span`
    font-size: 18px;
    margin-right: 6%;
    font-weight: 600;
    color: #333333;
    cursor: pointer;
    &:hover{
        color: #9c57f5;
    }
`

const TownBtnWrapper = styled.div`
    width: 25%;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: right;
`
const TownBtnSpan = styled.span`
    font-size: 18px;
    margin-left: 8%;
    font-weight: 900;
    cursor: pointer;
`



function Guide() {
    return (
        <>
            <GuideWrapper>
                <BurgerWrapper>
                    <Burger src={Gnb}></Burger>
                </BurgerWrapper>
                <GuideBtnWrapper>
                    <GuideBtnSpan>Top100</GuideBtnSpan>
                    <GuideBtnSpan>자격증정보</GuideBtnSpan>
                    <GuideBtnSpan>어학/공무원</GuideBtnSpan>
                    <GuideBtnSpan>자넷info</GuideBtnSpan>
                    <GuideBtnSpan>자넷톡</GuideBtnSpan>
                </GuideBtnWrapper>
                <TownBtnWrapper>
                    <TownBtnSpan>우리동네학원</TownBtnSpan>
                    <TownBtnSpan>커뮤니티</TownBtnSpan>
                    <TownBtnSpan>자격증AI</TownBtnSpan>
                </TownBtnWrapper>
            </GuideWrapper>
        </>
    )
}

export default Guide
import React from "react"
import styled from "styled-components"
import Gnb from "../../data/image/gnb.webp"

const WholeWrapper = styled.div`
    height: auto;
    display: flex;
    @media (max-width: 991px) {
        width: 90vw;
    }
    width: 70vw;
`
//햄버거 버튼
const BurgerWrapper = styled.div`
    width: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Burger = styled.img`
    width: 90%;
    cursor: pointer;
`

//항목 이동
const GuideBarWrapper = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    @media
`
const GuideBarText = styled.span`
    
    @media (max-width:4336px){
        font-size: 3em;
    }
    @media (max-width: 3400px){
        font-size: 2em;
    }
    @media (max-width: 2190px){
        font-size: 1em;
    }
    @media (max-width:991px){
        font-size: 0.5em;
    }
    font-size: 4em;
    font-weight: 600;
    margin-left: 5%;
    color: #333333;
    &:hover {
        color: #9c57f5;
    }
    cursor: pointer;
`

//우리동네학원/커뮤니티/자격증AI
const GuideTownWrapper = styled.div`
    width: 27%;
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const GuideTownText = styled.span`
@media (max-width:4336px){
    font-size: 3em;
}
@media (max-width: 3400px){
    font-size: 2em;
}
@media (max-width: 2190px){
    font-size: 1em;
}
@media (max-width:991px){
    font-size: 0.5em;
}
    font-size: 4.5em;
    font-weight: 700;
    margin-left: auto;   
`


function HeaderGuide(){
    return(
        <>
            <WholeWrapper>
                <BurgerWrapper>
                    <Burger src={Gnb} />
                </BurgerWrapper>
                <GuideBarWrapper>
                    <GuideBarText>Top100</GuideBarText>
                    <GuideBarText>자격증정보</GuideBarText>
                    <GuideBarText>어학/공무원</GuideBarText>
                    <GuideBarText>자넷info</GuideBarText>
                    <GuideBarText>자넷톡</GuideBarText>
                </GuideBarWrapper>
                <GuideTownWrapper>
                    <GuideTownText>우리동네학원</GuideTownText>
                    <GuideTownText>커뮤니티</GuideTownText>
                    <GuideTownText>자격증AI</GuideTownText>
                </GuideTownWrapper>
            </WholeWrapper>
        </>
    )
}

export default HeaderGuide
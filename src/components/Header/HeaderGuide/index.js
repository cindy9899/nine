import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import GuideBar from "./GuideBar"
import GuideTown from "./GuideTown"

const WholeWrapper = styled.div`
    height: auto;
    display: flex;
    @media (max-width: 991px) {
        width: 90vw;
    }
    width: 70vw;
    align-items: center;
`
//햄버거 버튼
const BurgerWrapper = styled.div`
    width: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
`

//항목 이동
const GuideBarWrapper = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    @media
`

//우리동네학원/커뮤니티/자격증AI
const GuideTownWrapper = styled.div`
    width: 27%;
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
`


function HeaderGuide(){
    return(
        <>
            <WholeWrapper>
                <BurgerWrapper><Burger /></BurgerWrapper>
                <GuideBarWrapper><GuideBar /></GuideBarWrapper>
                <GuideTownWrapper><GuideTown /></GuideTownWrapper>
            </WholeWrapper>
        </>
    )
}

export default HeaderGuide
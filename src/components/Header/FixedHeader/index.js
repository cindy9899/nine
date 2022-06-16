import React from "react"
import styled from "styled-components"
import Logo from "../../../data/image/fix_logo.webp"
import UserService from "../../UserService"
import Burger from "../HeaderGuide/Burger"
import GuideBar from "../HeaderGuide/GuideBar"
import GuideTown from "../HeaderGuide/GuideTown"

const FixedHeaderWrapper = styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #cdcdcd;
    z-index: 9999;
`
const LogoWrapper = styled.div`
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoImg = styled.img`
    width: 60%;
    height: 60%;
`
const BurgerWrapper = styled.div`
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const GuideBarWrapper = styled.div`
    width: 30vw;
    height: 5vw;
    display: flex;
    align-items: center;
`
const GuideTownWrapper = styled.div`
    width: 20vw;
    height: 5vw;
    display: flex;
    align-items: center;
`
const UwerServiceWrapper = styled.div`
    width: 15vw;
    height: 5vw;
    margin-left: 4vw;
    display: flex;
    align-items: center;
`

function FixedHeader() {
    return(
        <>
            <FixedHeaderWrapper>
                <LogoWrapper>
                    <LogoImg src={Logo} />
                </LogoWrapper>
                <BurgerWrapper><Burger /></BurgerWrapper>
                <GuideBarWrapper><GuideBar /></GuideBarWrapper>
                <GuideTownWrapper><GuideTown /></GuideTownWrapper>
                <UwerServiceWrapper><UserService /></UwerServiceWrapper>
            </FixedHeaderWrapper>
        </>
    )
}

export default FixedHeader
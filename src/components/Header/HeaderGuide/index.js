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
`



function HeaderGuide(){
    return(
        <>
            <WholeWrapper>
                <Burger />
                <GuideBar />
                <GuideTown />
            </WholeWrapper>
        </>
    )
}

export default HeaderGuide
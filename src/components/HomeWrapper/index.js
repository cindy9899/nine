import styled from "styled-components"
import React from "react"
import Home from "../Home"
import TopBanner from "../../data/image/top_banner.webp"

const HomeWrapperdiv = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
`
const Banner = styled.img`
    width: 100%;
    height: auto;
`
function HomeWrapper() {
    return (
        <HomeWrapperdiv>
            <Banner src={TopBanner}/>
            <Home />
        </HomeWrapperdiv>
    )
}

export default HomeWrapper
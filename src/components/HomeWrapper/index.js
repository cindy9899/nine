import styled from "styled-components"
import React from "react"
import Home from "../Home"
import TopBanner from "../../data/image/top_banner.webp"

const WholeWrapper = styled.div`
    border: 1px solid red;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
`
const Banner = styled.img`
    width: 100%;
`

function HomeWrapper() {
    return (
        <>
            <WholeWrapper>
                <Banner src={TopBanner} />
                <Home />
            </WholeWrapper>
        </>
    )
}

export default HomeWrapper
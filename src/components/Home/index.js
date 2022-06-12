import React from "react"
import styled from "styled-components"
import Ads from "../Ads"
import Guide from "../Guide"
import Header from "../Header"
import Keyword from "../Keyword"

const MainWrapper = styled.div`
    width: 1300px;
    height: auto;
    display: inline-block;
`



function Home() {
    return (
        <MainWrapper>
            <Header />
            <Guide />
            <Ads />
            <Keyword />
        </MainWrapper>
    )
}

export default Home
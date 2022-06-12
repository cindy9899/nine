import React from "react"
import styled from "styled-components"
import Ads from "../Ads"
import Guide from "../Guide"
import Header from "../Header"
import Keyword from "../Keyword"

const ProperSizeWrapper = styled.div`
    width: 1250px;
    height: auto;
    display: inline-block;
`



function Home() {
    return (
        <>
        <ProperSizeWrapper>
            <Header />
            <Guide />
        </ProperSizeWrapper>
        <Ads />
        <ProperSizeWrapper>
            <Keyword />
        </ProperSizeWrapper>
        </>
        
    )
}

export default Home
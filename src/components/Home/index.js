import React from "react"
import styled from "styled-components"
import Ads from "../Ads"
import Guide from "../Guide"
import HeaderGuide from "../HeaderGuide"
import HeaderSearch from "../HeaderSearch"
import Keyword from "../Keyword"

const WholeWrapper = styled.div`
    border: 1px solid red;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`

function Home() {
    return (
        <>
            <WholeWrapper>
                <HeaderSearch />
                <HeaderGuide />
                <Guide />
                <Ads />
                <Keyword />
            </WholeWrapper>
        </>
        
    )
}

export default Home
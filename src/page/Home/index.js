import React from "react"
import styled from "styled-components"
import Ads from "../../components/Ads"
import Guide from "../../components/Guide"
import HeaderGuide from "../../components/Header/HeaderGuide"
import HeaderSearch from "../../components/Header/HeaderSearch"
import Keyword from "../../components/Keyword"

const WholeWrapper = styled.div`
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
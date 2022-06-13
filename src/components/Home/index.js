import React from "react"
import styled from "styled-components"
import Ads from "../Ads"
import Guide from "../Guide"
import Header from "../Header"
import Keyword from "../Keyword"

const WholeWrapper = styled.div`
    border: 1px solid red;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

function Home() {
    return (
        <>
            <WholeWrapper>
                <Header />
            </WholeWrapper>
        </>
        
    )
}

export default Home
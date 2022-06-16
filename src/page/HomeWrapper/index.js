import styled from "styled-components"
import React from "react"
import Home from "../Home"


const WholeWrapper = styled.div`
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 0;
`


function HomeWrapper() {
    return (
        <>
            <WholeWrapper>
                
                <Home />
            </WholeWrapper>
        </>
    )
}

export default HomeWrapper
import React from "react"
import styled from "styled-components"
//우리동네학원/커뮤니티/자격증AI
const GuideTownWrapper = styled.div`
    width: 27%;
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const GuideTownText = styled.span`
@media (max-width:4336px){
    font-size: 3em;
}
@media (max-width: 3400px){
    font-size: 2em;
}
@media (max-width: 2190px){
    font-size: 1em;
}
@media (max-width:991px){
    font-size: 0.5em;
}
    font-size: 4.5em;
    font-weight: 700;
    margin-left: auto;   
`

function GuideTown() {
    return(
        <>
                <GuideTownWrapper>
                    <GuideTownText>우리동네학원</GuideTownText>
                    <GuideTownText>커뮤니티</GuideTownText>
                    <GuideTownText>자격증AI</GuideTownText>
                </GuideTownWrapper>
        </>
    )
}

export default GuideTown
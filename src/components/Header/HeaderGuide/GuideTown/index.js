import React from "react"
import styled from "styled-components"

const GuideTownText = styled.span`
@media (max-width:4650px){
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
                    <GuideTownText>우리동네학원</GuideTownText>
                    <GuideTownText>커뮤니티</GuideTownText>
                    <GuideTownText>자격증AI</GuideTownText>
        </>
    )
}

export default GuideTown
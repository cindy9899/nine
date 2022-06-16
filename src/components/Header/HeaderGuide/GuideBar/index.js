import React from "react"
import styled from "styled-components"


const GuideBarText = styled.span`
    
    @media (max-width:4950px){
        font-size: 3em;
    }
    @media (max-width: 3750px){
        font-size: 2em;
    }
    @media (max-width: 2480px){
        font-size: 1em;
    }
    @media (max-width:991px){
        font-size: 0.5em;
    }
    font-size: 4em;
    font-weight: 600;
    margin-left: 5%;
    color: #333333;
    &:hover {
        color: #9c57f5;
    }
    cursor: pointer;
`

function GuideBar() {
    return (
        <>
                    <GuideBarText>Top100</GuideBarText>
                    <GuideBarText>자격증정보</GuideBarText>
                    <GuideBarText>어학/공무원</GuideBarText>
                    <GuideBarText>자넷info</GuideBarText>
                    <GuideBarText>자넷톡</GuideBarText>
        </>
    )
}

export default GuideBar
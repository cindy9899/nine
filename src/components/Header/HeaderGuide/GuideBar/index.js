import React from "react"
import styled from "styled-components"

//항목 이동
const GuideBarWrapper = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    @media
`
const GuideBarText = styled.span`
    
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
                <GuideBarWrapper>
                    <GuideBarText>Top100</GuideBarText>
                    <GuideBarText>자격증정보</GuideBarText>
                    <GuideBarText>어학/공무원</GuideBarText>
                    <GuideBarText>자넷info</GuideBarText>
                    <GuideBarText>자넷톡</GuideBarText>
                </GuideBarWrapper>
        </>
    )
}

export default GuideBar
import React from "react"
import styled from "styled-components"
import JsonData from "../../data/top20/index.json"
import HotKeword_1 from "../../data/image/hotKeyword_01.webp"
import HotKeword_2 from "../../data/image/hotKeyword_02.webp"
import HotKeword_3 from "../../data/image/hotKeyword_03.webp"
import HotKeword_4 from "../../data/image/hotKeyword_04.webp"
import HotKeword_5 from "../../data/image/hotKeyword_05.webp"
import HotKeword_6 from "../../data/image/hotKeyword_06.webp"
import HotKeword_7 from "../../data/image/hotKeyword_07.webp"
import HotKeword_8 from "../../data/image/hotKeyword_08.webp"

const KeywordWrapper = styled.div`
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vw;
`
const KeywordBox = styled.div`
    width: 100%;
    height: 10vw;
    border: 1px solid #cdcdcd;
    margin-bottom: 1vw;
    border-radius: 1vw;
    overflow: hidden;
    height: 2;
`

//사진있는 곳
const KeywordBoxTop = styled.div` 
    width: 100%;
    height: 60%;
    overflow: hidden;
`
const BoxTopImg = styled.img`
    width: 100%;
    opacity: 0.4;
`
const BoxTopImgLayer = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: ${(props)=>props.layerColor};
`
//내용
const KeywordBoxBottom = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 4em;
    padding: 0 1vw;
`
const BoxBottomText = styled.span`
    font-size: ${(props)=>props.fontSize};
    color: ${(props)=>props.fontColor};
`


function Keyword() {
    const DisplayData = JsonData.map(
        (info)=>{
            const fromDate = new Date(info.esRegdt);
            const toDate = fromDate.getFullYear() +"-"+ fromDate.getMonth() +"-"+ fromDate.getDay();
            const backgroundArr = [null, HotKeword_1, HotKeword_2, HotKeword_3, HotKeword_4, HotKeword_5, HotKeword_6, HotKeword_7, HotKeword_8]
            const layerArr = [null, "rgba(255, 179, 0, 1)", "rgba(119, 0, 255, 1)", "rgba(255, 81, 0, 1)", "rgba(41, 40, 39, 1)", "rgba(0, 30, 255, 1)", "rgba(255, 0, 93, 1)", "rgba(64, 55, 58, 1)", "rgba(214, 211, 4, 1)"]
            const backgroundImg = backgroundArr[info.id]
            const backgroundLayer = layerArr[info.id]
            return(
                <KeywordBox>
                    <KeywordBoxTop>
                        <BoxTopImgLayer layerColor={backgroundLayer}>
                            <BoxTopImg src={backgroundImg} />
                        </BoxTopImgLayer>
                        
                    </KeywordBoxTop>
                    <KeywordBoxBottom>
                        <BoxBottomText fontSize="3em" fontColor="#6e6e6e">시행기관 : {info.licenseOrgan}</BoxBottomText>
                        <BoxBottomText fontSize="2em" fontColor="#f15959">시행일 : {toDate}</BoxBottomText>
                    </KeywordBoxBottom>
                </KeywordBox>
            )
        }
    )
    return (
        <>
            <KeywordWrapper>
                {DisplayData}
            </KeywordWrapper>
        </>
    )
}

export default Keyword
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
import { AiOutlinePlus } from "react-icons/ai"

const KeywordWrapper = styled.div`
    height: 35vw;
`
const KeywordBox = styled.div`
    position: absolute;
    width: 17%;
    height: 10vw;
    border: 1px solid #cdcdcd;
    border-radius: 1vw;
    background-color: #fff;
    left: ${(props)=>props.locationIdxColumn};
    top: ${(props)=>props.locationIdxRow};
    :hover{
        height: 21vw;
        z-index: 9999;
        border: 1px solid #9c57f5;
    }
    overflow: hidden;
`

//사진있는 곳
const KeywordBoxTop = styled.div` 
    width: 100%;
    height: 60%;
    overflow: hidden;
    ${KeywordBox}:hover & {
        height: 28.5%;
    }
`
const BoxTopImg = styled.img`
    width: 100%;
    height: 6vw;
    opacity: 0.4;
    ${KeywordBox}:hover & {
        opacity: 1;
    }
`
const BoxTopImgLayer = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
    left: 0;
    top: 0;
    background-color: ${(props)=>props.layerColor};
    ${KeywordBox}:hover & {
        background-color: transparent;
        height: 47%;
    }
`
//내용
const KeywordBoxBottom = styled.div`
    width: 88%;
    height: 39%;
    display: flex;
    flex-direction: column;
    line-height: 4em;
    justify-content: center;
    padding: 0 1vw;
    ${KeywordBox}:hover & {
        background-color: transparent;
        height: 19%;
        border-bottom: 0.5px solid #cdcdcd;
    }
`
const KeywordBoxBottomPlus = styled.div`
    width: 88%;
    height: 28%; //밑의 텍스트 글자 이걸로 고칩니다.
    display: none;
    padding: 1vw 1vw;
    ${KeywordBox}:hover & {
        display: block;
    }
`
const BoxBottomTextBlock = styled.div`
`
const BoxBottomText = styled.span`
    font-size: ${(props)=>props.fontSize};
    color: ${(props)=>props.fontColor};
    font-weight: ${(props)=>props.bold? "900":""};
`
const BoxBottomPlusBtn = styled.div`
    width: 19%;
    height: 15%;
    background-color: rgba(156, 87, 245, 0.7);
    border-radius: 20px;
    float: right;
    color: #fff;
    display: none;
    ${KeywordBox}:hover & {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .plus {
        font-size: 5em;
    }
`
function Keyword() {
    const DisplayData = JsonData.map(
        (info, i)=>{
            const fromDate = new Date(info.esRegdt);
            const toDate = fromDate.getFullYear() +"-"+ fromDate.getMonth() +"-"+ fromDate.getDay();
            const backgroundArr = [null, HotKeword_1, HotKeword_2, HotKeword_3, HotKeword_4, HotKeword_5, HotKeword_6, HotKeword_7, HotKeword_8]
            const layerArr = [null, "rgba(255, 179, 0, 1)", "rgba(119, 0, 255, 1)", "rgba(255, 81, 0, 1)", "rgba(41, 40, 39, 1)", "rgba(0, 30, 255, 1)", "rgba(255, 0, 93, 1)", "rgba(64, 55, 58, 1)", "rgba(214, 211, 4, 1)"]
            const backgroundImg = backgroundArr[info.id]
            const backgroundLayer = layerArr[info.id]
            const abLocationColumn = (15+18*(i%4))+"vw"
            const abLocationRow = (52+11*parseInt(i/4))+"vw"

            return(
                <KeywordBox locationIdxColumn={abLocationColumn} locationIdxRow={abLocationRow}>
                    <KeywordBoxTop>
                        <BoxTopImgLayer layerColor={backgroundLayer}>
                            <BoxTopImg src={backgroundImg} />
                        </BoxTopImgLayer>
                        
                    </KeywordBoxTop>
                    <KeywordBoxBottom>
                        <BoxBottomText fontSize="3em" fontColor="#6e6e6e">시행기관 : {info.licenseOrgan}</BoxBottomText>
                        <BoxBottomText fontSize="2em" fontColor="#f15959">시행일 : {toDate}</BoxBottomText>
                    </KeywordBoxBottom>
                    <KeywordBoxBottomPlus>
                        <BoxBottomTextBlock>
                            <BoxBottomText fontSize="3em" fontColor="#6e6e6e" bold>유형: </BoxBottomText>
                            <BoxBottomText fontSize="3em" fontColor="#6e6e6e">제 464회</BoxBottomText>
                        </BoxBottomTextBlock>
                        <BoxBottomTextBlock>
                            <BoxBottomText fontSize="3em" fontColor="#6e6e6e" bold>접수기간: </BoxBottomText>
                            <BoxBottomText fontSize="3em" fontColor="#6e6e6e">2022-05-09 ~ 13</BoxBottomText>
                        </BoxBottomTextBlock>
                    </KeywordBoxBottomPlus>
                    <BoxBottomPlusBtn><AiOutlinePlus className="plus"/></BoxBottomPlusBtn>
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
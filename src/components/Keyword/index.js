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
import { FaFire } from "react-icons/fa"

const KeywordWrapper = styled.div`
    width: 70%;
    height: 35vw;
`
const KeywordBox = styled.div`
    position: absolute;
    width: 17%;
    height: 10vw;
    border: 1px solid #cdcdcd;
    border-radius: 1vw;
    background-color: #fff;
    @media (max-width: 4990px){
        top: calc(${(props)=>props.locationIdxRow} + 2vw);
    }
    @media (max-width: 4600px) {
        top: calc(${(props)=>props.locationIdxRow} + 3vw);
    }
    @media (max-width: 3200px){
        top: calc(${(props)=>props.locationIdxRow} + 7vw);
    }
    @media (max-width: 2850px) {
        top: calc(${(props)=>props.locationIdxRow} + 9vw);
    }
    @media (max-width: 2420px) {
        top: calc(${(props)=>props.locationIdxRow} + 12vw);
    }
    left: ${(props)=>props.locationIdxColumn};
    top: ${(props)=>props.locationIdxRow};
    :hover{
        height: 21vw;
        z-index: 5000;
        border: 1px solid #9c57f5;
    }
    overflow: hidden;
    cursor: pointer;
    
    
`

//사진있는 곳
const KeywordBoxTop = styled.div`
    width: 100%;
    height: 60%;
    overflow: hidden;
    ${KeywordBox}:hover & {
        height: 28.5%;
    }
    position: relative;
`
const BoxTopImg = styled.img`
    width: 100%;
    height: 6vw;
    opacity: 0.4;
    ${KeywordBox}:hover & {
        opacity: 1;
    }
`

const TextOnImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`
const TextOnImageDate = styled.div`
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
    ${KeywordBox}:hover & {
        height: 100%;
    }
`
const TextOnImageTitle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    ${KeywordBox}:hover & {
        height: 120%;
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
    
    justify-content: center;
    padding: 0 1vw;
    ${KeywordBox}:hover & {
        background-color: transparent;
        height: 19%;
        border-bottom: 0.5px solid #cdcdcd;
    }
    @media(max-width: 4500px){
        line-height: 3em;
    }
    @media(max-width:3000px) {
        line-height: 2em;
    }
    line-height: 4em;
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
const BoxText = styled.span`
    @media(max-width: 4500px){
        font-size: calc(${(props)=>props.fontSize} / 1.2);
    }
    @media(max-width:3850px) {
        font-size: calc(${(props)=>props.fontSize} / 1.4);
    }
    @media(max-width:3000px) {
        font-size: calc(${(props)=>props.fontSize} / 1.6);
    }
    font-size: ${(props)=>props.fontSize};
    color: ${(props)=>props.fontColor};
    font-weight: ${(props)=>props.bold? "900":""};
    background-color: ${(props)=>props.fontBackground};
    padding: ${(props)=>props.fontPadding};
    border-radius: ${(props)=>props.fontBorder};
    margin: ${(props)=>props.fontMargin}
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
            const abLocationRow = (53+11*parseInt(i/4))+"vw"
            const leftDate = Math.ceil((fromDate - new Date())/86400000)
            const absLeftDate = Math.abs(leftDate)

            return(
                <KeywordBox locationIdxColumn={abLocationColumn} locationIdxRow={abLocationRow}>
                    <KeywordBoxTop>
                        <BoxTopImgLayer layerColor={backgroundLayer}>
                        <TextOnImage>
                                    <TextOnImageDate>
                                        {leftDate>0? 
                                        <BoxText fontSize="2.5em" fontColor="#fff" fontBackground="#9c57f5" fontPadding="0.5em 0.7em" fontBorder="1em">D-{absLeftDate}</BoxText>
                                         :
                                         <BoxText fontSize="2.5em" fontColor="#fff" fontBackground="#9c57f5" fontPadding="0.5em 0.7em" fontBorder="1em">D+{absLeftDate}</BoxText>
                                         }
                                    </TextOnImageDate>
                                    <TextOnImageTitle>
                                        <BoxText fontSize="4em" fontColor="#fff" fontMargin="0 0 0 0.5em" bold>{info.title}</BoxText>
                                    </TextOnImageTitle>
                        </TextOnImage>
                            <BoxTopImg src={backgroundImg} />
                                
                                
                        </BoxTopImgLayer>
                        
                    </KeywordBoxTop>
                    <KeywordBoxBottom>
                        <BoxText fontSize="3em" fontColor="#6e6e6e">시행기관 : {info.licenseOrgan}</BoxText>
                        <BoxText fontSize="2em" fontColor="#f15959">시행일 : {toDate}</BoxText>
                    </KeywordBoxBottom>
                    <KeywordBoxBottomPlus>
                        <BoxBottomTextBlock>
                            <BoxText fontSize="3em" fontColor="#6e6e6e" bold>유형: </BoxText>
                            <BoxText fontSize="3em" fontColor="#6e6e6e">제 464회</BoxText>
                        </BoxBottomTextBlock>
                        <BoxBottomTextBlock>
                            <BoxText fontSize="3em" fontColor="#6e6e6e" bold>접수기간: </BoxText>
                            <BoxText fontSize="3em" fontColor="#6e6e6e">2022-05-09 ~ 13</BoxText>
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
                <BoxText fontSize="6em" fontColor="#9c57f5" bold><FaFire />HOT</BoxText>
                <BoxText fontSize="6em" bold>키워드</BoxText>
                <BoxText fontSize="6em">TOP20</BoxText>
                {DisplayData}
            </KeywordWrapper>
        </>
    )
}

export default Keyword
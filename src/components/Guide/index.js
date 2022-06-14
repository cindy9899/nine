import React from "react"
import styled from "styled-components"
import Ad from "../../data/image/ad1.webp"
import { GrNext, GrPrevious } from "react-icons/gr"
import  Crfc1 from "../../data/image/Crfc1.webp"
import  Crfc2 from "../../data/image/Crfc2.webp"
import  Crfc3 from "../../data/image/Crfc3.webp"
import  Crfc4 from "../../data/image/Crfc4.webp"
import infoAd from "../../data/image/infoad.webp"

const WholeWrapper = styled.div`
    width: 100vw;
    height: auto;
    background: linear-gradient(to right, rgba(173,207,255,0.25) 0%,rgba(173,206,255,0.25) 1%,rgba(181,176,248,0.25) 50%,rgba(187,143,240,0.25) 100%);
    display: flex;
    padding: 7vh;
    justify-content: center;
    color: #333333;
    `

//광고
const AdSlideWrapper = styled.div`
    width: 25vw;
    height: 25vw;
    margin-right: 2vh;
`
const AdSlideImg = styled.img`
    width: 25vw;
    height: 100%;
`
//정보
const MainInfoWrapper = styled.div`
    width: 33vw;
    height: 23vw;
    margin-right: 2vh;
    padding: 1% 2%;
    background-color: #fff;
`
const InfoHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
`
const MoveWrapper = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
`

const InfoMove = styled.div`
    border: 1px solid #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
        font-size: 0.8em;
    }
    font-size: 2.5em;
    padding: 0.5em;
    cursor: pointer;
` 
//정보그리드
const MainInfoBody = styled.div`
    width: 33vw;
    height: 60%;
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
`
const InfoBodyPart = styled.div`
    width: 16vw;
    height: 50%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`
const InfoBodyImg = styled.img`
    width: 30%;
    height: 80%;
`
const InfoBodyText = styled.div`
    width: 70%;
    padding: 0.5vh 1vw;
`
const InfoText = styled.span`
    @media(max-width:3800px){
        font-size: calc(${(props)=>props.fontSize}/1.3);
    }
    @media(max-width: 2950px){
        font-size: calc(${(props)=>props.fontSize}/1.6)
    }
    @media(max-width: 991px){
        font-size: calc(${(props)=>props.fontSize}/3)
    }
    font-size: ${(props)=>props.fontSize};
    font-weight: 600;
    display: ${(props)=>props.display};
`

const MainInfoAd = styled.img`
    width: 98%;
    height: 18%;
    margin-top: 1vh;
`
//인기순위
const KeywordWrapper = styled.div`
    width: 17vw;
    height: 23vw;
    padding: 1% 2%;
    background-color: #fff;
`
const KeywordBody = styled.div`
    width: 100%;
    height: 80%;
    padding: 1vh 0;
`
const KeywordLine = styled.div`
@media(max-width:4800px){
    line-height: calc(7em/1.2);
}
@media(max-width: 4340px){
    line-height: calc(6em/1.3);
}
@media(max-width: 3530px){
    line-height: calc(6em/1.4);
}
@media(max-width: 3150px){
    line-height: calc(6em/1.6);
}
@media(max-width: 991px){
    line-height: calc(6em/3)
}
    line-height: 7em;
    display: flex;

@media(max-width: 3150px){
    ${(props)=>props.none? `display: none`:""}
}
`
const KeywordText = styled.span`
@media(max-width:4880px){
    font-size: calc(3.5em/1.2);
}
@media(max-width: 3530px){
    font-size: calc(3em/1.6)
}
@media(max-width: 991px){
    font-size: calc(3em/3)
}
    font-size: 3.5em;
    margin-left: 1vw;
    color: ${(props)=>props.fontColor || "#333333"};
    ${(props)=>props.click? `
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    `:''}

`

function Guide() {
    return (
        <>
            <WholeWrapper>
                <AdSlideWrapper>
                    <AdSlideImg src={Ad} />
                </AdSlideWrapper>
                <MainInfoWrapper>
                    <InfoHeader>
                        <InfoText fontSize="4em" display="inline">자격증정보</InfoText>
                        <MoveWrapper>
                            <InfoMove><GrPrevious /></InfoMove>
                            <InfoMove><GrNext /></InfoMove>
                        </MoveWrapper>
                    </InfoHeader>
                    <MainInfoBody>
                        <InfoBodyPart>
                            <InfoBodyImg src={Crfc1}/>
                            <InfoBodyText>
                                <InfoText fontSize="4em" display="block">자격증정보</InfoText>
                                <InfoText fontSize="3em" display="block">자격증정보의<br/>모든 것</InfoText>
                            </InfoBodyText>
                        </InfoBodyPart>
                        <InfoBodyPart>
                            <InfoBodyImg src={Crfc2}/>
                            <InfoBodyText>
                                <InfoText fontSize="4em" display="block">계열별정보</InfoText>
                                <InfoText fontSize="3em" display="block">자격증에 대하여<br/>알려드립니다.</InfoText>
                            </InfoBodyText>
                        </InfoBodyPart>
                        <InfoBodyPart>
                            <InfoBodyImg src={Crfc3}/>
                            <InfoBodyText>
                                <InfoText fontSize="4em" display="block">자격증 공모전</InfoText>
                                <InfoText fontSize="3em" display="block">자격증 관련<br/>공모전 정보<br/>확인하기</InfoText>
                            </InfoBodyText>
                        </InfoBodyPart>
                        <InfoBodyPart>
                            <InfoBodyImg src={Crfc4}/>
                            <InfoBodyText>
                                <InfoText fontSize="4em" display="block">시험접수안내</InfoText>
                                <InfoText fontSize="3em" display="block">필기/실기<br/>기본접수안내</InfoText>
                            </InfoBodyText>
                        </InfoBodyPart>
                    </MainInfoBody>
                    <MainInfoAd src={infoAd}/>
                </MainInfoWrapper>
                <KeywordWrapper>
                    <InfoHeader>
                        <InfoText fontSize="4em" display="inline">기사 인기순위</InfoText>
                        <MoveWrapper>
                            <InfoMove><GrPrevious /></InfoMove>
                            <InfoMove><GrNext /></InfoMove>
                        </MoveWrapper>
                    </InfoHeader>
                    <KeywordBody>
                        <KeywordLine><KeywordText fontColor="#bababa">1</KeywordText><KeywordText click>전기기사</KeywordText></KeywordLine>
                        <KeywordLine><KeywordText fontColor="#bababa">2</KeywordText><KeywordText click>산업안전기사</KeywordText></KeywordLine>
                        <KeywordLine><KeywordText fontColor="#bababa">3</KeywordText><KeywordText click>위험물산업기사</KeywordText></KeywordLine>
                        <KeywordLine><KeywordText fontColor="#bababa">4</KeywordText><KeywordText click>전기산업기사</KeywordText></KeywordLine>
                        <KeywordLine><KeywordText fontColor="#bababa">5</KeywordText><KeywordText click>건축기사</KeywordText></KeywordLine>
                        <KeywordLine none><KeywordText fontColor="#bababa">6</KeywordText><KeywordText click>건설안전기사</KeywordText></KeywordLine>
                        <KeywordLine none><KeywordText fontColor="#bababa">7</KeywordText><KeywordText click>소방설비기사(전기분야)</KeywordText></KeywordLine>
                        <KeywordLine none><KeywordText fontColor="#bababa">8</KeywordText><KeywordText click>제품디자인산업기사</KeywordText></KeywordLine>
                        <KeywordLine none><KeywordText fontColor="#bababa">9</KeywordText><KeywordText click>건설기계정비산업기사</KeywordText></KeywordLine>
                        <KeywordLine none><KeywordText fontColor="#bababa">10</KeywordText><KeywordText click>사출금형산업기사</KeywordText></KeywordLine>
                    </KeywordBody>
                </KeywordWrapper>
            </WholeWrapper>
        </>
    )
}

export default Guide
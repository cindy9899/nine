import React from "react"
import styled from "styled-components"
import Ad from "../../data/image/ad1.webp"
import InfoAdImage from "../../data/image/infoad.webp"
import { GrNext, GrPrevious } from "react-icons/gr"
import Crfc1 from "../../data/image/Crfc1.webp"
import Crfc2 from "../../data/image/Crfc2.webp"
import Crfc3 from "../../data/image/Crfc3.webp"
import Crfc4 from "../../data/image/Crfc4.webp"

const AdsWrapper = styled.div`
    width: 100%;
    padding: 55px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, rgba(173,207,255,0.25) 0%,rgba(173,206,255,0.25) 1%,rgba(181,176,248,0.25) 50%,rgba(187,143,240,0.25) 100%);
`
const AdSlideWrapper = styled.div`
    width: 420px;
    height: 370px;
    margin-right: 10px;
`
const AdSlider = styled.img`
    width: 420px;
    height: 370px;
`
const MainInfoWrapper = styled.div`
    width: 520px;
    height: 305px;
    margin-right: 10px;
    padding: 30px 30px 35px;
    background: #fff;
    box-shadow: 3px 3px 15px rgb(221 185 189 / 30%);
`
const MainInfoHeader = styled.div`
    width: 520px;
    height: 30px;
`
const InfoHeaderSpan = styled.span`
    font-size: 20px;
    font-weight: 500;
    float: left;
`
const InfoHeaderBtn = styled.div`
    float: right;
    width: 19px;
    height: 19px;
    border: 1px solid #dfdfdf;
    padding: 0;
    margin: 0;
    text-align: center;
`
const MainInfoBody = styled.div`
    width: 500px;
    height: 160px;
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
`
const InfoBody1 = styled.div`
    width: 47%;
    height: 60px;
    padding: 10px 5px;
    cursor: pointer;
`
const InfoBody2 = styled.div`
    width: 47%;
    height: 60px;
    padding: 10px 5px;
    cursor: pointer;
`
const InfoBody3 = styled.div`
    width: 47%;
    height: 60px;
    padding: 10px 5px;
    cursor: pointer;
`
const InfoBody4 = styled.div`
    width: 47%;
    height: 60px;
    padding: 10px 5px;
    cursor: pointer;
`
const InfoBodyImg = styled.img`
    float: left;
    margin: 0;
    padding: 0;
`
const InfoBodyText=styled.div`
    float: left;
    color: #333333;
    text-align: left;
    margin-left: 20px;
`

const InfoBodyTitle = styled.span`
    display: block;
    font-size: 17px;
    font-weight: 700;
`
const InfoBodyMain = styled.span`
    font-size: 12px;
    line-height: 10px;
`
const MainInfoAd = styled.div`
    width: 500px;
    height: 60px;
    padding: 0 10px;
    margin-top: 15px;
`
const InfoAd = styled.img`
    width: 100%;
`
const MainChartWrapper = styled.div`
    width: 230px;
    height: 295px;
    padding: 40px 30px 35px;
    background: #fff;
    box-shadow: 3px 3px 15px rgb(221 185 189 / 30%);
`
function Ads() {
    return (
        <>
            <AdsWrapper>
                <AdSlideWrapper>
                    <AdSlider src={Ad} />
                </AdSlideWrapper>
                <MainInfoWrapper>
                    <MainInfoHeader>
                        <InfoHeaderSpan>자격증정보</InfoHeaderSpan>
                        <InfoHeaderBtn><GrNext color="#8e8cfd"/></InfoHeaderBtn>
                        <InfoHeaderBtn><GrPrevious color="#8e8cfd"/></InfoHeaderBtn>
                    </MainInfoHeader>
                    <MainInfoBody>
                        <InfoBody1>
                            <InfoBodyImg src={Crfc1} />
                            <InfoBodyText>
                                <InfoBodyTitle>자격증정보</InfoBodyTitle>
                                <InfoBodyMain>자격증정보의<br/>모든 것</InfoBodyMain>
                            </InfoBodyText>
                            
                        </InfoBody1>
                        <InfoBody2>
                            <InfoBodyImg src={Crfc2} />
                            <InfoBodyText>
                                <InfoBodyTitle>계열별 정보</InfoBodyTitle>
                                <InfoBodyMain>자격증에 대하여<br/>알려드립니다.</InfoBodyMain>
                            </InfoBodyText>
                        </InfoBody2>
                        <InfoBody3>
                            <InfoBodyImg src={Crfc3} />
                            <InfoBodyText>
                                <InfoBodyTitle>자격증 공모전</InfoBodyTitle>
                                <InfoBodyMain>자격증 관련<br/>공모전 정보<br/>확인하기</InfoBodyMain>
                            </InfoBodyText>
                        </InfoBody3>
                        <InfoBody4>
                            <InfoBodyImg src={Crfc4} />
                            <InfoBodyText>
                                <InfoBodyTitle>시험접수안내</InfoBodyTitle>
                                <InfoBodyMain>필기/실기<br/>기본접수안내</InfoBodyMain>
                            </InfoBodyText>
                            
                        </InfoBody4>
                    </MainInfoBody>
                    <MainInfoAd><InfoAd src={InfoAdImage}/></MainInfoAd>
                </MainInfoWrapper>
                <MainChartWrapper></MainChartWrapper>
            </AdsWrapper>
        </>
    )
}

export default Ads
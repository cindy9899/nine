import React from "react"
import styled from "styled-components"
import Ad from "../../data/image/ad1.webp"

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
    height: 295px;
    margin-right: 10px;
    padding: 40px 30px 35px;
    background: #fff;
    box-shadow: 3px 3px 15px rgb(221 185 189 / 30%);
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
                <MainInfoWrapper></MainInfoWrapper>
                <MainChartWrapper></MainChartWrapper>
            </AdsWrapper>
        </>
    )
}

export default Ads
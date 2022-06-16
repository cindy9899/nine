import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Ads from "../../components/Ads"
import Guide from "../../components/Guide"
import FixedHeader from "../../components/Header/FixedHeader"
import HeaderGuide from "../../components/Header/HeaderGuide"
import HeaderSearch from "../../components/Header/HeaderSearch"
import Keyword from "../../components/Keyword"
import TopBanner from "../../data/image/top_banner.webp"

const WholeWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Banner = styled.img`
    width: 100%;
`

function Home() {
    const [Scrolly, setScrolly] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll(){
        if(Scrolly>350){
            setScrolly(window.pageYOffset);
            setScrollActive(true);
        }else{
            setScrolly(window.pageYOffset);
            setScrollActive(false);
        }
    }

    useEffect(()=>{
        function scrollListener(){
            window.addEventListener("scroll", handleScroll);
        }
        scrollListener();
        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    })
    return (
        <>
            <WholeWrapper>
                <Banner src={TopBanner} />
                <HeaderSearch />
                <HeaderGuide />
                {ScrollActive? <FixedHeader />: ""}
                {/* <Banner src={TopBanner} />
                <HeaderSearch />
                <HeaderGuide /> */}
                
                <Guide />
                <Ads />
                <Keyword />
            </WholeWrapper>
        </>
        
    )
}

export default Home
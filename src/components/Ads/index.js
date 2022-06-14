import React, {useRef, useState} from "react"
import styled from "styled-components"
import { GrNext, GrPrevious } from "react-icons/gr"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation} from "swiper"
import 'swiper/css'
import "swiper/css/navigation";

import Ad1 from "../../data/image/MainBn_scroll_01.webp"
import Ad2 from "../../data/image/MainBn_scroll_02.webp"
import Ad3 from "../../data/image/MainBn_scroll_03.webp"
import Ad4 from "../../data/image/MainBn_scroll_04.webp"
import Ad5 from "../../data/image/MainBn_scroll_05.webp"
import Ad6 from "../../data/image/MainBn_scroll_06.webp"

const WholeWrapper = styled.div`
    width: 80%;
    display: flex;
    padding: 2vw 0;
`

const AdsImg = styled.img`
    width: 100%;
    overflow: hidden;
`
function Ads() {

    return (
        <>
        <WholeWrapper>
        
            <Swiper 
                modules={[Navigation]}
                spaceBetween={100}
                navigation
                slidesPerView={3}
                loop={true}
            >
                    <SwiperSlide><AdsImg src={Ad1} /></SwiperSlide>
                    <SwiperSlide><AdsImg src={Ad2} /></SwiperSlide>
                    <SwiperSlide><AdsImg src={Ad3} /></SwiperSlide>
                    <SwiperSlide><AdsImg src={Ad4} /></SwiperSlide>
                    <SwiperSlide><AdsImg src={Ad5} /></SwiperSlide>
                    <SwiperSlide><AdsImg src={Ad6} /></SwiperSlide>
            </Swiper>
            
            
        </WholeWrapper>
        </>
    )
}

export default Ads
import React from "react"
import styled from "styled-components"
import Gnb from "../../../../data/image/gnb.webp"

//햄버거 버튼
const BurgerWrapper = styled.div`
    width: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BurgerImg = styled.img`
    width: 90%;
    cursor: pointer;
`
function Burger() {
    return (
        <>
        <BurgerWrapper>
                    <BurgerImg src={Gnb} />
                </BurgerWrapper>
        </>
    )
}

export default Burger
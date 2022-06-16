import React from "react"
import styled from "styled-components"
import Gnb from "../../../../data/image/gnb.webp"


const BurgerImg = styled.img`
    width: 90%;
    cursor: pointer;
`
function Burger() {
    return (
        <>
                    <BurgerImg src={Gnb} />
        </>
    )
}

export default Burger
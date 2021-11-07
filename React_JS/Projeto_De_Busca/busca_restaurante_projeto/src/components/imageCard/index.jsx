import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-image:url(${(props) => props.photo});
    background-size: cover;
    border-radius: 10%;
    display: flex;
    height: 90px;
    justify-content: center;
    padding: 5px;
    width: 90px;
`

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #fff;
    font-size: 16px;
`

const ImageCard = ({photo, title}) =>{
    return(
        <Card photo={photo}>
            <Title>{title}</Title>
        </Card>
    )
}

export default ImageCard
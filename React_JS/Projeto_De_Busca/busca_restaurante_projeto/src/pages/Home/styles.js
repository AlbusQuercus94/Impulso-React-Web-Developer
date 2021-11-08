import styled from "styled-components";
import Slider from "react-slick";


export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 3% 0
`

export const Container = styled.aside
`
background-color: ${(props) => props.theme.colors.background};
height: 100vh;
overflow-y: auto;
width: 550px;
`;

export const Logo = styled.img`
margin-bottom: 3%;
`
export const Map = styled.div`
    background-color: pink;
    width: 100%
`

export const Search = styled.section `
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
padding: 2%;
padding-bottom: 5%
`

export const Carousel = styled(Slider)`
    .slick-slide{
        display: flex;
        margin: 2%;
    }
`

export const Wrapper = styled.div`
    display: flex;
`

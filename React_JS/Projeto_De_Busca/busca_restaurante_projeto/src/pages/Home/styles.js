import styled from "styled-components";


export const Container = styled.aside
`
background-color: ${(props) => props.theme.colors.background};
height: 100vh;
overflow-y: auto;
width: 360px;
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
`

export const Wrapper = styled.div`
    display: flex;
`
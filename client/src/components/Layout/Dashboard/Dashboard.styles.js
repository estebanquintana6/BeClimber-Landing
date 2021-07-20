import styled, { keyframes } from 'styled-components'

const moveInBottom = keyframes`
    0% { 
        opacity:0;
        -webkit-transform:translateY(3rem);
        transform:translateY(3rem);
    }
    100% {
        opacity:1;
        -webkit-transform:translate(0);
        transform:translate(0);
    }
`

const blackBackgroundAnimation = keyframes`
0% { 
    background: rgba(0, 0, 0, 1);
}
100% {
    background: rgba(0, 0, 0, 0);
}
`

const moveUp = keyframes`
    0% { 
        opacity:1;
        transform: scale(1) translateY(300px);
    }
    100% {
        opacity:1;
        transform: scale(0.25) translateY(0px);
    }
`

export const MainHeader = styled.div`
    height: 100vh;
    background-image: url(${props => props.src});
    @media (max-width: 1024px) {
        background-position-x: -250px;
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: relative;
    z-index: 0;
    &:hover,
    &:focus {
      color: palevioletred;
    }
    &:before {
        background: rgba(0, 0, 0, 0.5);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`

export const HeaderCenteredBox = styled.div`
    position: absolute;
    height: 120vh;
    width: 100%;
    animation: ${blackBackgroundAnimation} 6s ease-out 4s;
    animation-fill-mode: backwards;
    top: 45%;
    @media (min-width: 1024px) {
        top: 40%;
    }
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`

export const Logo = styled.img`
    width: 360px;
    @media (min-width: 1024px) {
        width: 65vh;
    }
    transform: scale(0.25);
    animation: ${moveUp} 3s ease-out 2s;
    animation-fill-mode: backwards;
    transition: all 1s;
    display: inline-block;
    position: relative;
    &:after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s; 
    }
`

export const AboutElement = styled.div`
    width: 100%;
    margin: 24px 0px;
    @media (min-width: 1024px) {
        width: 50%;
        margin: 0 24px;
    }
    height: 70vh;
    cursor: pointer;
    background-image: url(${props => props.src});
    position: relative;
    z-index: 0;
    &:hover,
    &:focus {
      color: palevioletred;
    }
    &:before {
        background: rgba(0, 0, 0, 0.6);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`

export const MoreInfoSection = styled.section`
    display: flex;
    padding: 50px;
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 20px;
    }
`

export const AboutElementTitle = styled.span`
    color: white;
    z-index: 2;
    position: relative;
    top: 45%;
    left: 10%;
    font-size: 30px;
    @media (min-width: 1024px) {
        font-size: 44px;
    }
`
import styled, { keyframes } from 'styled-components'

import { Col, Row } from 'react-bootstrap'

export const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export const IntroAbout = styled.div`
    background: black;
    position: relative;
    height: 100vh;
`

export const IntroTitleWrapper = styled(Col)`
    text-align: center;
    padding: 0 20px;
    @media (min-width: 1024px) {
        padding: 0 100px;
    }
    position: absolute;
    top: 45%;
`

export const IntroTitle = styled.h2`
    color: #fafafa;
    font-size: 35px;
    border-bottom: 2px solid #8700ff;
    text-transform: uppercase;
`

export const AboutImageWrapper = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
        width: 45%;
        padding: 30px;
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const AboutImage = styled.img`
    width: 100%;
`

export const AboutTitleWrapper = styled.div`
    text-align: center;
    margin: 20px 0;
`

export const AboutTitle = styled.h2`
    color: black;
    font-size: 17pt;
    border-bottom: 2px solid #8700ff;
    text-transform: uppercase;
`

export const AboutDescription = styled.div`
    text-align: center;
`

export const AboutIntroText = styled.p`
    font-size: 10pt;
`

export const AboutList = styled.ul`
    margin-top: 30px;
    list-style-type: none;
`

export const AboutListElement = styled.li`
    font-size: 9.5pt;
    margin: 15px 0;
    font-weight: bold;
`
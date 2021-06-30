import styled, { keyframes } from 'styled-components'

import { Col } from 'react-bootstrap'

export const Wrapper = styled.div`
    padding: 30px;
    height: 100vh;
`

export const IntroAbout = styled.div`
    background: black;
    position: relative;
    height: 100vh;
`

export const IntroTitleWrapper = styled(Col)`
    text-align: center;
    padding: 0 100px;
    position: absolute;
    top: 45%;
`

export const IntroTitle = styled.h2`
    color: #fafafa;
    font-size: 35px;
    border-bottom: 2px solid #8700ff;
    text-transform: uppercase;
`

export const AboutImageHolder = styled.div`
    width: 50%;
`

export const AboutImage = styled.img`
    height: 100%;
`


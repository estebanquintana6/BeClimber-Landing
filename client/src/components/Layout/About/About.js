import React, { useEffect } from 'react';

import { Row } from 'react-bootstrap'
import { InView } from 'react-intersection-observer';

import {
    IntroAbout,
    IntroTitleWrapper,
    IntroTitle,
    AboutImage,
    AboutImageHolder,
    Wrapper
} from './About.styles'

import './About.css'

const About = () => {

    return (
        <>
            <InView>
                {({ inView, ref }) =>
                    <IntroAbout>
                        <IntroTitleWrapper
                            className={`${inView ? 'move-in' : ''}`}
                            ref={ref}>
                            <IntroTitle>Somos B Climber</IntroTitle>
                        </IntroTitleWrapper>
                    </IntroAbout>
                }
            </InView>
            <Wrapper>

            </Wrapper>
        </>
    )
}

export default About
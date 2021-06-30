import React, { useEffect } from 'react';

import { Row } from 'react-bootstrap'
import { InView } from 'react-intersection-observer';

import {
    IntroAbout,
    IntroTitleWrapper,
    IntroTitle,
    AboutDescription,
    AboutImage,
    AboutImageWrapper,
    AboutIntroText,
    AboutList,
    AboutListElement,
    AboutTitle,
    AboutTitleWrapper,
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
                <AboutImageWrapper>
                    <InView>
                        {({ inView, ref }) =>
                            <AboutImage src='/static/img/about.jpeg'
                                className={`${inView ? 'move-in' : ''}`}
                                ref={ref} />
                        }
                    </InView>
                </AboutImageWrapper>
                <AboutImageWrapper>
                    <AboutTitleWrapper>
                        <AboutTitle>Escala con nosotros.</AboutTitle>
                    </AboutTitleWrapper>
                    <AboutDescription>
                        <AboutIntroText>
                            Somos B Climber, una escuela de escalada en la ciudad de Querétaro enfocada en generar conocimiento por medio de educación experiencial y nuestro objetivo es:
                        </AboutIntroText>
                        <AboutList>
                            <AboutListElement>
                                Ayudar a la gente a acercarse a la escalada en roca de manera integral, segura y divertida.
                            </AboutListElement>
                            <AboutListElement>
                                Ayudar al avance de escaladores principiantes e intermedios en maniobras, técnica y control mental.
                            </AboutListElement>
                            <AboutListElement>
                                Esparcir la ética al aire libre y técnicas de mínimo impacto para un crecimiento sano del deporte generando la menor huella posible y preservando las zonas de escalada
                            </AboutListElement>
                            <AboutListElement>
                                Crear una comunidad consciente y que actúa bajo las mejores prácticas en el deporte y las áreas naturales
                            </AboutListElement>
                        </AboutList>
                    </AboutDescription>
                </AboutImageWrapper>
            </Wrapper>
        </>
    )
}

export default About
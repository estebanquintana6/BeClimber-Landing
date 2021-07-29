import React from 'react';

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
    AboutWrapper,
    SecondaryTitle,
    ServiceWrapper,
    ServiceText
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
            <AboutWrapper>
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
                        <AboutTitle>¿Quiénes somos?</AboutTitle>
                    </AboutTitleWrapper>
                    <AboutDescription>
                        <AboutIntroText>
                            Somos una escuela de escalada en la ciudad de Querétaro enfocada en crear
                            conocimiento por medio de educación experiencial y nuestro objetivo es
                            construir una comunidad consciente de escaladores:
                        </AboutIntroText>
                        <AboutList>
                            <AboutListElement>
                                Ayudando a la gente a acercarse a la escalada en roca de manera integral, segura y divertida.
                            </AboutListElement>
                            <AboutListElement>
                                Ayudando al avance de escaladores principiantes e intermedios en maniobras, técnica y control mental.
                            </AboutListElement>
                            <AboutListElement>
                                Esparciendo la ética al aire libre y técnicas de mínimo impacto para un crecimiento sano del deporte generando la menor huella posible y preservando las zonas de escalada
                            </AboutListElement>
                        </AboutList>
                    </AboutDescription>
                </AboutImageWrapper>
            </AboutWrapper>

            <ServiceWrapper>
                <AboutImageWrapper>
                    <AboutTitleWrapper>
                        <AboutTitle>Nuestros cursos</AboutTitle>
                    </AboutTitleWrapper>
                    <AboutDescription>
                        <AboutList>
                            <AboutListElement services>
                                <SecondaryTitle>Curso de Introducción a la Escalada Deportiva:</SecondaryTitle>
                                <ServiceText>
                                    Aprende todas las bases de la escalada deportiva en roca;
                                    desde conocimiento del equipo, identificación y prevención de riesgos,
                                    hasta planeación de salidas a escalar,
                                    al concluir el curso serás capaz de escalar con las mejores prácticas
                                    deportivas de manera autónoma con tu cordada
                                </ServiceText>
                            </AboutListElement>
                            <AboutListElement services>
                                <SecondaryTitle>Taller de multilargos:</SecondaryTitle>
                                <ServiceText>
                                    Aprenderás cómo evitar los riesgos y errores más comunes
                                    y resolver problemas que se puedan presentar,
                                    además profundizaremos en reuniones, maniobras, nudos y medios de fortuna)
                                </ServiceText>
                            </AboutListElement>
                        </AboutList>
                    </AboutDescription>
                </AboutImageWrapper>
                <AboutImageWrapper>
                    <InView>
                        {({ inView, ref }) =>
                            <AboutImage src='/static/img/services.jpeg'
                                className={`${inView ? 'move-in' : ''}`}
                                ref={ref} />
                        }
                    </InView>
                </AboutImageWrapper>
            </ServiceWrapper>
        </>
    )
}

export default About
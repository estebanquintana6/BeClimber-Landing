import React from 'react';

import {
    FloatingButtonWrapper,
    LargeImageSectionWrapper,
    ScheduleButton
} from './LargeImageSection.styles'

const LargeImageSection = ({ src }) => {
    return (
        <>
            <LargeImageSectionWrapper src={src}>
                {
                    /*
                    <FloatingButtonWrapper>
                        <ScheduleButton>Agenda ahora</ScheduleButton>
                    </FloatingButtonWrapper>
                    */
                }
            </LargeImageSectionWrapper>
        </>
    )
}

export default LargeImageSection
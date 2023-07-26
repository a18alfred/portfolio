import * as Styled from './NumberDivider.styles';
import React from 'react';
import AnimationSlide from '../AnimationSlide/AnimationSlide';

interface Props {
    number: number;
}

const NumberDivider: React.FC<Props> = ({ number }) => {
    return (
        <AnimationSlide>
            <Styled.Container>
                <Styled.Wrapper>
                    <Styled.Line />
                    <Styled.Notch />
                </Styled.Wrapper>
                <Styled.Number>{number < 10 ? `0${number}` : number}</Styled.Number>
            </Styled.Container>
        </AnimationSlide>
    );
};

export default NumberDivider;

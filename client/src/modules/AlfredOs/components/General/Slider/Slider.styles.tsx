import styled from 'styled-components';

const sliderThumbWidth = 9;
const sliderThumbHeight = 20;
const sliderTrackWidth = 4;

export const SliderStyled = styled.div`
  position: relative;
  display: flex;

  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const SliderTrack = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;

  box-shadow: inset 1px 1px ${(props) => props.theme.osColors.lightGray},
  inset 2px 2px ${(props) => props.theme.osColors.black},
    inset -1px -1px ${(props) => props.theme.osColors.white},
    inset -2px -2px ${(props) => props.theme.osColors.darkGray};

  padding: 0;
  width: ${sliderTrackWidth}px;
  height: 100%;
`;

export const SliderHandle = styled.div`
  display: flex;
  box-shadow: inset 1px 1px ${(props) => props.theme.osColors.white},
    inset -1px -1px ${(props) => props.theme.osColors.black},
    inset -2px -2px ${(props) => props.theme.osColors.lightGray};
  background-color: ${({ theme }) => theme.osColors.lightGray};
  position: absolute;
  cursor: pointer;
  left: -${sliderThumbHeight * 0.5}px;
  width: ${sliderThumbHeight}px;
  height: ${sliderThumbWidth}px;
`;

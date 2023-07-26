import { SliderStyled } from '../../General/Slider/Slider.styles';
import styled from 'styled-components';

export const VolumeControlStyled = styled.div`
  position: absolute;
  bottom: 28px;
  right: 70px;
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.osColors.white};
  border-bottom-color: ${(props) => props.theme.osColors.black};
  border-right-color: ${(props) => props.theme.osColors.black};
  background: ${(props) => props.theme.osColors.lightGray};

  & > p {
    font-size: 0.6rem;
  }

  & > ${SliderStyled} {
    margin-top: 6px;
  }

  height: 100px;
`;
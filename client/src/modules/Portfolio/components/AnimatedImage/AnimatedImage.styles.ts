import styled from 'styled-components';
import { Props } from './AnimatedImage';
import { slideTop } from '../../../../shared/theme/animaton';

type ImgProps = Pick<Props, 'animationDuration' | 'delay'>
export const Img = styled.img<ImgProps>`
  animation: ${slideTop} ${({ animationDuration }) => animationDuration}s ease-out both;
  animation-delay: ${({ delay }) => delay ? delay : 0}s;
`;
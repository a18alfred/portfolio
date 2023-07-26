import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HiddenContainer = styled.div`
  user-select: none;
  pointer-events: none;
  width: 100%;
  opacity: 0;
`;
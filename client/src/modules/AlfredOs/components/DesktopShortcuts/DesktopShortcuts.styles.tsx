import styled from 'styled-components';

export const ShortcutsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px 16px 50px 16px;
  width: max-content;
  height: 100%;
  max-height: 550px;
`;
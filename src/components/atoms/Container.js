import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: ${p => p.height || "100%"};
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  position: relative;
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
  min-height: ${p => p.minHeight};
  padding: ${p => p.padding || "20px"};
  box-sizing: border-box;
  overflow-x: hidden;
`;
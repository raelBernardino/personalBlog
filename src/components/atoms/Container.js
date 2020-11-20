import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: ${p => p.height || "100%"};
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans TC', sans-serif;
  position: relative;
  justify-content: ${p => p.justifyContent};
  padding: ${p => p.padding || "20px"};
  box-sizing: border-box;
`;
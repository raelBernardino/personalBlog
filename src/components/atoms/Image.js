import styled from 'styled-components';

export const Image = styled.div`
  width: ${p => p.width || "auto" };
  height: ${p => p.height|| "auto" };
  background-position: ${p => p.position || "center"};
  background-size: ${p => p.size || "cover"};
  background-image: url(${p => p.src || ""});
  position: relative;
`
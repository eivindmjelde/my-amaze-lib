import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

const Box = styled.div`
  padding: 100px;
  border: 2px solid green;
`;

export function AmazingBox(): ReactElement {
  return <Box>Imma box yo!</Box>;
}

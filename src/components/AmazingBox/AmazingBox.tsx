import React, { ReactElement } from "react";
import styled from "styled-components";

export type AmazingBoxProps = {
  madProp: string;
};

const Box = styled.div`
  padding: 100px;
  border: 2px solid green;
`;

export function AmazingBox({
  madProp = "crazy box",
}: AmazingBoxProps): ReactElement {
  return <Box>Imma {madProp} yo!</Box>;
}

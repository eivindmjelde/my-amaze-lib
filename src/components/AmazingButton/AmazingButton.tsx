import React, { ReactElement } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 20px;
  border: 2px solid hotpink;
`;

type AmazingButtonProps = {
  text?: string;
};

export function AmazingButton({
  text = "Imma button brah",
}: AmazingButtonProps): ReactElement {
  return (
    <>
      <Button>{text}</Button>
    </>
  );
}

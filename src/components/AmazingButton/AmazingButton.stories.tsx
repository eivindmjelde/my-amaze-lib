import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { AmazingButton } from "./";

export default {
  title: "Components/Button",
  component: AmazingButton,
} as Meta;

export const Primary = () => <AmazingButton />;

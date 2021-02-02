import { Meta, Story } from "@storybook/react";
import React from "react";
import { AmazingBox } from "./";

export default {
  title: "AmazingBox",
  component: AmazingBox,
  args: {},
} as Meta;

const Template: Story = (args) => <AmazingBox {...args} />;
export const Default = Template.bind({});

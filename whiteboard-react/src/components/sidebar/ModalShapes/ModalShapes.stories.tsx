import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalShapes } from "./ModalShapes";

export default {
  title: "Control Bars/Sidebar/Modal Shapes",
  component: ModalShapes,
  argTypes: {},
} as ComponentMeta<typeof ModalShapes>;

const Template: ComponentStory<typeof ModalShapes> = (args) => (
  <ModalShapes {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};

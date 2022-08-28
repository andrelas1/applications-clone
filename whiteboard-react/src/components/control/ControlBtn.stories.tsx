import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ControlBtn } from "./ControlBtn";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Control Bars/Controls",
  component: ControlBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ControlBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlBtn> = (args) => (
  <ControlBtn {...args} />
);

export const MousePointer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MousePointer.args = {
  iconType: "mouse-pointer",
};

export const Shape = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Shape.args = {
  iconType: "square",
};

export const Templates = Template.bind({});
Templates.args = {
  iconType: "templates",
};

export const Text = Template.bind({});
Text.args = {
  iconType: "text",
};

export const StickyNote = Template.bind({});
StickyNote.args = {
  iconType: "sticky-note",
};

export const Shapes = Template.bind({});
Shapes.args = {
  iconType: "shapes",
};

export const Line = Template.bind({});
Line.args = {
  iconType: "line",
};

export const Pen = Template.bind({});
Pen.args = {
  iconType: "pen",
};

export const Comment = Template.bind({});
Comment.args = {
  iconType: "comment",
};

export const Frame = Template.bind({});
Frame.args = {
  iconType: "frame",
};

export const Upload = Template.bind({});
Upload.args = {
  iconType: "upload",
};

export const MoreTools = Template.bind({});
MoreTools.args = {
  iconType: "more-tools",
};

export const RoundedSquare = Template.bind({});
RoundedSquare.args = {
  iconType: "rounded-square",
};

export const AngledSquare = Template.bind({});
AngledSquare.args = {
  iconType: "angled-square",
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  iconType: "arrow-right",
};

export const Triangle = Template.bind({});
Triangle.args = {
  iconType: "triangle",
};

export const Square = Template.bind({});
Square.args = {
  iconType: "square",
};

export const TextTalk = Template.bind({});
TextTalk.args = {
  iconType: "text-talk",
};

export const Trapezoid = Template.bind({});
Trapezoid.args = {
  iconType: "trapezoid",
};

export const Star = Template.bind({});
Star.args = {
  iconType: "star",
};

import React from "react";

import { Particles } from "./Particles";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "tsParticles/Particles",
  component: Particles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    links: { control: "boolean" },
    particlesColors: { control: "object" },
    linkColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Particles {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: "#000",
  links: true,
  particlesColors: ["#fff"],
  linkColor: "#fff",
};

export const Inverse = Template.bind({});
Inverse.args = {
  backgroundColor: "#fff",
  links: true,
  particlesColor: ["#000"],
  linkColor: "#000",
};

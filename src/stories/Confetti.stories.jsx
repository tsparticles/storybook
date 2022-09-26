import React from 'react';

import { Confetti } from './Confetti';
import { confettiPresets } from "../particles-presets";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'tsParticles/Confetti',
    component: Confetti,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        preset: {
            options: Object.keys(confettiPresets),
            control: {
                type: 'select'
            }
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Confetti {...args} />;

export const Bottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bottom.args = {
    backgroundColor: "#000",
    preset: "bottom"
};

export const Explosions = Template.bind({});
Explosions.args = {
    backgroundColor: "#000",
    preset: "explosions"
};

export const Side = Template.bind({});
Side.args = {
    backgroundColor: "#000",
    preset: "side"
};

export const Falling = Template.bind({});
Falling.args = {
    backgroundColor: "#000",
    preset: "falling"
};

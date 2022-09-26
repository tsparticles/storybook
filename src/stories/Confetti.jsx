import React from 'react';
import Particles from 'react-particles';
import PropTypes from 'prop-types';
import { loadFull } from "tsparticles";
import { getConfettiPreset } from "../particles-presets";

export const Confetti = ({ backgroundColor, preset, shapes }) => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return (
        <Particles
            init={particlesInit}
            options={getConfettiPreset(preset, backgroundColor, shapes)}
        />
    );
};

Confetti.propTypes = {
    backgroundColor: PropTypes.string,
    preset: PropTypes.string,
    shapes: PropTypes.arrayOf(PropTypes.string)
};

Confetti.defaultProps = {
    backgroundColor: "#000",
    shapes: ["circle"]
};

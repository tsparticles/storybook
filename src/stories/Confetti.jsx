import React from 'react';
import Particles from 'react-particles';
import PropTypes from 'prop-types';
import { loadFull } from "tsparticles";
import { getConfettiPreset } from "../particles-presets";

export const Confetti = ({ backgroundColor, preset }) => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return (
        <Particles
            init={particlesInit}
            options={getConfettiPreset(preset, backgroundColor)}
        />
    );
};

Confetti.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * What background color to use
     */
    preset: PropTypes.string,
};

Confetti.defaultProps = {
    backgroundColor: "#000"
};

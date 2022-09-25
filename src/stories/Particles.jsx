import React from 'react';
import Particles from 'react-particles';
import PropTypes from 'prop-types';
import { loadFull } from "tsparticles";

export const ParticlesComponent = ({ backgroundColor, particlesColor }) => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return (
        <Particles
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: backgroundColor,
                    }
                },
                particles: {
                    color: {
                        value: particlesColor,
                    },
                    move: {
                        enable: true,
                    }
                }
            }}
        />
    );
};

ParticlesComponent.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * What background color to use
     */
    particlesColor: PropTypes.string,
};

ParticlesComponent.defaultProps = {
    backgroundColor: "#000",
    particlesColor: "#fff"
};

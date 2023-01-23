import React from "react";
import ReactParticles from "react-particles";
import PropTypes from "prop-types";
import { loadFull } from "tsparticles";

export const Particles = ({
  backgroundColor,
  particlesColor,
  links,
  linkColor,
}) => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <ReactParticles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        particles: {
          color: {
            value: particlesColor,
          },
          links: {
            enable: links,
            color: linkColor,
          },
          move: {
            enable: true,
          },
        },
      }}
    />
  );
};

Particles.propTypes = {
  backgroundColor: PropTypes.string,
  links: PropTypes.bool,
  particlesColors: PropTypes.arrayOf(PropTypes.string),
  linkColor: PropTypes.string,
};

Particles.defaultProps = {
  backgroundColor: "#000",
  links: true,
  particlesColors: ["#fff"],
  linkColor: "#fff",
};

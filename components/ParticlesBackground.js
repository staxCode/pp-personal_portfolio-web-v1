import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

import ParticlesConfig from "../config/particles-config";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id="particle-background">
      <Particles
        id="tsparticles"
         init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
        width="50vw"
      ></Particles>
    </div>
  );
};

export default ParticleBackground;

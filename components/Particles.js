// components/Particles.js
import { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== 'undefined') {
        await import('particles.js');
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#f59e0b" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 }
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ef4444",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.5 } },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        });
      }
    };

    loadParticles();
  }, []);

  return <div id="particles-js" className="absolute inset-0 z-0"></div>;
};

export default Particles;
/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'triangle', // "circle", "edge" or "triangle"
      opacity: 0.5,
      size: 3,
      size_random: true,
      nb: 100,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 250
      },
      detect_on: 'canvas', // "canvas" or "window"
      mode: 'grab',
      line_linked: {
        opacity: 0.5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push', // "push" or "remove" (particles)
          nb: 2
        }
      } 
    },
    /* Retina Display Support */
    retina_detect: true
  });
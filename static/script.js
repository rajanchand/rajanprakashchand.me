document.addEventListener("DOMContentLoaded", function () {
  // Function to initialize particles with the default color based on theme
  function initParticles() {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const particleColor = isDarkMode ? "#ffffff" : "#000000"; // White for dark, black for light

    const particlesElement = document.getElementById("particles-js");
    if (!particlesElement) {
      return;
    }

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: particleColor,
        },
        shape: {
          type: "polygon",
          stroke: {
            width: 0,
            color: particleColor,
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 19.18081918081918,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: particleColor,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        nb: 80,
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Function to refresh particles based on the current theme
  function refreshParticles() {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const newColor = isDarkMode ? "#ffffff" : "#000000"; // Update color based on theme

    // Use pJSDom to modify particles color and refresh them
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.particles.color.value = newColor;
      window.pJSDom[0].pJS.particles.line_linked.color = newColor;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  }

  function changeGiscusTheme() {
    const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    function sendMessage(message) {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
      setConfig: {
        theme: theme,
      },
    });
  }

  // Event listener for theme toggle button
  const themeToggleButton = document.querySelector(".btn-dark");
  themeToggleButton.addEventListener("click", function () {
    // Toggle dark mode class on the html element
    // document.documentElement.classList.toggle("dark");
    const particlesElement = document.getElementById("particles-js");
    // Refresh particles to update colors
    if (particlesElement) {
      refreshParticles();
    }
    changeGiscusTheme();
  });

  // Initial particle setup
  initParticles();
});

// Bloco para rolagem suave dos links internos
 document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          smoothScrollTo(targetPosition, 2500); // 1.5 segundos
        }
      });
    });
 
    function smoothScrollTo(targetY, duration) {
      const startY = window.scrollY;
      const distanceY = targetY - startY;
      let startTime = null;
 
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const ease = easeInOutQuad(progress > 1 ? 1 : progress);
        window.scrollTo(0, startY + distanceY * ease);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
 
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
 
      requestAnimationFrame(animation);
    }
  });
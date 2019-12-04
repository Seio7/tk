import Highway from '@dogstudio/highway/src/highway';

export default () => {
  class SimpleFade extends Highway.Transition {
    in({ from, to, done }) {
      // Reset Scroll
      window.scrollTo(0, 0);
  
      // Remove Old View
      from.remove();
  
      // Animation
      to.addEventListener("transitionend", () => {
        done();
      }, {once: true});
      
      window.requestAnimationFrame(() => {
        to.style.opacity = 0;
        window.requestAnimationFrame(() => {
          to.style.opacity = 1;
        })
      })
    }
  
    out({ from, done }) {
      // Animation
      from.style.opacity = 0;
      from.addEventListener("transitionend", () => {
        done();
      }, {once: true});
    }
  }
  
  const highwayCore = new Highway.Core({
    transitions: {
      default: SimpleFade
    }
  })

  // Add active class on navigation
  // Get all menu links
  const links = document.querySelectorAll('.menu-item a');

  // Listen the `NAVIGATE_IN` event
  // This event is sent everytime a `data-router-view` is added to the DOM Tree
  highwayCore.on('NAVIGATE_IN', ({ to, location }) => {
    // Check Active Link
    links.forEach(link => {
      const linkParent = link.parentNode
      linkParent.classList.remove('current-menu-item');

      if (link.href === location.href) {
        linkParent.classList.add('current-menu-item');
      }
    });
  })

  highwayCore.on('NAVIGATE_END', ({ location }) => {
    // Check Anchor
    if (location.anchor) {
      // Get element
      const el = document.querySelector(location.anchor);
  
      if (el) {
        // Scroll to element
        window.scrollTo(el.offsetLeft, el.offsetTop);
      }
    }
  });
}

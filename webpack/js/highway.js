import Highway from '@dogstudio/highway/src/highway';
import Tween from 'gsap';
import LazyLoad from 'vanilla-lazyload'
import jump from 'jump.js'

export default () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
  });

  class SimpleFade extends Highway.Transition {
    in({ from, to, done }) {
      // Reset Scroll
      window.scrollTo(0, 0);
  
      // Remove Old View
      from.parentNode.removeChild(from);
  
      // Animation
      Tween.set(to, {opacity: 0})
      Tween.to(to, {
          opacity: 1,
          duration: 0.4,
          onComplete: () => done() 
      });
    }
  
    out({ from, done }) {
      // Animation
      Tween.fromTo(from, 0.4,
        { opacity: 1 },
        {
          opacity: 0,
          onComplete: () => done()
        }
      );
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
    // update LazyLoad
    lazyLoadInstance.update()
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
        jump(el, {
          duration: 800,
          offset: 0,
        });
      }
    }
  });
}
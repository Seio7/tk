export default function initNavigation() {
  var container, button, menu, links, i, len;

  container = document.querySelector('.main-navigation');
  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];
  if ('undefined' === typeof button) {
    return;
  }

  menu = container.querySelector('.main-navigation-menu');

  // Hide menu toggle button if menu is empty and return early.
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');
  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  // Get all the link elements within the menu.
  links = menu.getElementsByTagName('a');

  // Each time a menu link is focused or blurred, toggle focus.
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    var self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (-1 === self.className.indexOf('nav-menu')) {

      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }


  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */
  (function (container) {
    var touchStartFn, i,
      parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    if ('ontouchstart' in window) {
      touchStartFn = function (e) {
        var menuItem = this.parentNode,
          i;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();
          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove('focus');
          }
          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  }(container));

  function toggleMenu() {
    var menuOpen = menu.getAttribute('aria-expanded') === 'false' ? false : true;
    menu.setAttribute('aria-expanded', !menuOpen);
    button.setAttribute('aria-expanded', !menuOpen);
    container.classList.toggle('toggled');
  }

  function closeMobileMenu() {
    menu.setAttribute('aria-expanded', false);
    button.setAttribute('aria-expanded', false);
    container.classList.remove('toggled');
    button.classList.remove('button-cross');
    menu.style.height = null;
  }

  function closeMobileMenuOnBreakpoint() {
    if (window.innerWidth >= 1000 && menu.getAttribute('aria-expanded')) {
      closeMobileMenu();
    }
  }

  window.addEventListener('resize', closeMobileMenuOnBreakpoint);

  button.onclick = function () {
    if (container.classList.contains('toggled') && !menu.classList.contains('in-transition')) {
      button.classList.toggle('button-cross');
      collapseSection(menu)
    } else if (!menu.classList.contains('in-transition')) {
      button.classList.toggle('button-cross');
      toggleMenu();
      expandSection(menu);
    }
  };

  function collapseSection(element) {
    element.classList.add('in-transition');
    var elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function () {
      element.style.transition = elementTransition;
      requestAnimationFrame(function () {
        element.style.height = '0px';
      });
    });

    element.addEventListener('transitionend', function (e) {
      toggleMenu();
      element.classList.remove('in-transition');
    }, {once: true});
  }

  function expandSection(element) {
    element.classList.add('in-transition');
    if (!element.style.height) element.style.height = '0px';
    var sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';

    element.addEventListener('transitionend', function (e) {
      element.style.height = sectionHeight + 'px';
      element.classList.remove('in-transition');
    }, {once: true});
  }

  function closeMenuOnNavigation() {
    const links = document.querySelectorAll(".menu-item a")
    for (link of links) {
      window.innerWidth <= 1000 ? link.addEventListener("click", closeMobileMenu) : link.removeEventListener("click", closeMobileMenu);
    }
  }
  closeMenuOnNavigation();

};
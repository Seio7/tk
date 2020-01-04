import regeneratorRuntime from "regenerator-runtime";
import initNavigation from "./navigation";
import initNetlify from "./netlify";
// import Highway from './highway';
import app from './app';

initNavigation();
initNetlify();
// Highway();

import Highway from '@dogstudio/highway/src/highway';
import Tween from 'gsap';
import LazyLoad from 'vanilla-lazyload'
import jump from 'jump.js'


"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy" // ... more custom settings?

});

var SimpleFade =
/*#__PURE__*/
function (_Highway$Transition) {
  _inherits(SimpleFade, _Highway$Transition);

  function SimpleFade() {
    _classCallCheck(this, SimpleFade);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleFade).apply(this, arguments));
  }

  _createClass(SimpleFade, [{
    key: "in",
    value: function _in(_ref) {
      var from = _ref.from,
          to = _ref.to,
          done = _ref.done;
      // Reset Scroll
      window.scrollTo(0, 0); // Remove Old View

      from.remove(); // Animation

      Tween.set(to, {
        opacity: 0
      });
      Tween.to(to, {
        opacity: 1,
        duration: 0.4,
        onComplete: function onComplete() {
          return done();
        }
      });
    }
  }, {
    key: "out",
    value: function out(_ref2) {
      var from = _ref2.from,
          done = _ref2.done;
      // Animation
      Tween.fromTo(from, 0.4, {
        opacity: 1
      }, {
        opacity: 0,
        onComplete: function onComplete() {
          return done();
        }
      });
    }
  }]);

  return SimpleFade;
}(Highway.Transition);

var highwayCore = new Highway.Core({
  transitions: {
    "default": SimpleFade
  }
}); // Add active class on navigation
// Get all menu links

var links = document.querySelectorAll('.menu-item a'); // Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree

highwayCore.on('NAVIGATE_IN', function (_ref3) {
  var to = _ref3.to,
      location = _ref3.location;
  // update LazyLoad
  lazyLoadInstance.update(); // Check Active Link

  links.forEach(function (link) {
    var linkParent = link.parentNode;
    linkParent.classList.remove('current-menu-item');

    if (link.href === location.href) {
      linkParent.classList.add('current-menu-item');
    }
  });
});
highwayCore.on('NAVIGATE_END', function (_ref4) {
  var location = _ref4.location;

  // Check Anchor
  if (location.anchor) {
    // Get element
    var el = document.querySelector(location.anchor);

    if (el) {
      // Scroll to element
      jump(el, {
        duration: 800,
        offset: 0
      });
    }
  }
});








app();
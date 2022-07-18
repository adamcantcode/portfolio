/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/animations.js":
/*!*****************************************!*\
  !*** ./src/js/components/animations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headingAnimation": () => (/* binding */ headingAnimation)
/* harmony export */ });
function HeadingAnimation() {
  this.animateHeading = () => {
    // const heroAnimation = gsap.timeline();

    // heroAnimation.from('.name-card', {
    //   transform: 'matrix(1, .05, 0.1, 1, 0, 0)',
    //   y: '50px',
    //   opacity: 0,
    //   stagger: 0.2,
    //   duration: .5,
    //   delay: 1,
    //   ease: "power1.inOut"
    //   // markers: true
    // })

    function scene1() {
      const nameAnimation = gsap.timeline();
      nameAnimation.from('.name-card', {
        transform: 'matrix(1, .05, 0.1, 1, 0, 0)',
        y: '50px',
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        delay: 0.5,
        ease: 'power1.inOut',
        // markers: true
      });
      return nameAnimation;
    }

    function scene2() {
      const infoPanel = gsap.timeline();
      infoPanel.from('.info-text', {
        transform: 'matrix(1, .05, 0.1, 1, 0, 0)',
        y: '25px',
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        delay: 0.5,
        ease: 'power1.inOut',
        // markers: true
      });
      return infoPanel;
    }

    const master = gsap.timeline()
    .add(scene1())
    .add(scene2());

    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to('h1', {
    //   scrollTrigger: {
    //     trigger: 'h1', // selector or element
    //     start: 'center top', // [trigger] [scroller] positions
    //     end: '+=50', // [trigger] [scroller] positions
    //     scrub: true,
    //   },
    //   x: 500,
    //   duration: 1,
    //   ease: 'power2.inOut',
    //   // repeat: -1,
    //   // yoyo: true,
    // });
  };
}

const headingAnimation = new HeadingAnimation();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/animations */ "./src/js/components/animations.js");
/**
 * Import tailwind styles
 */

/**
 * Import all js
 */


document.addEventListener('DOMContentLoaded', function () {
  _components_animations__WEBPACK_IMPORTED_MODULE_1__.headingAnimation.animateHeading();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map
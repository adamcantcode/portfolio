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
function HeroAnimation() {
  this.animateHeading = () => {
    const master = gsap.timeline().add(this.nameAndTitle()).add(this.info());
  };
  this.nameAndTitle = () => {
    const nameAnimation = gsap.timeline();
    nameAnimation.from('.name-card', {
      transform: 'matrix(1, .05, 0.1, 1, 0, 0)',
      y: '50px',
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      delay: 1,
      ease: 'power1.inOut',
      repeatRefresh: true,
      // markers: true
    });
    return nameAnimation;
  };
  this.info = () => {
    const infoPanel = gsap.timeline();
    infoPanel.from('.info-item', {
      transform: 'matrix(1, .05, 0.2, 1, 0, 0)',
      y: '25px',
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      delay: 0.5,
      ease: 'power1.inOut',
      repeatRefresh: true,
      // markers: true
    });
    return infoPanel;
  };
  this.animateCursor = () => {
    window.addEventListener('mousemove', (e) => {
      gsap.to('.cursor', {
        x: e.x + 8,
        y: e.y - 8,
        ease: 'power4.out',
      });
    });
  };
  // this.textSlide = () => {
  //   gsap.to('.font-outline.font-stroke', {
  //     xPercent: 100,
  //     duration: 120,
  //     repeat: -1,
  //     // repeatDelay: 5,
  //     // stagger: 1,
  //     ease: 'linear',
  //   });
  // };
  // this.fadeOutOnScorll = () => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to('.name-card, .info-item', {
  //     opacity: 0,
  //     stagger: .1,
  //     duration: .3,
  //     repeatRefresh: true,
  //     scrollTrigger: {
  //       trigger: '#hero',
  //       start: '1px top',
  //       end: '100% top',
  //       // pin: true,
  //       anticipatePin: 1,
  //       pinSpacing: false,
  //       markers: true,
  //       // scrub: true, // or time (in seconds) to catch up
  //       invalidateOnRefresh: true,
  //     },
  //   });
  // };
}

const headingAnimation = new HeroAnimation();




/***/ }),

/***/ "./src/js/components/heroHoverPreview.js":
/*!***********************************************!*\
  !*** ./src/js/components/heroHoverPreview.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroHoverPreview": () => (/* binding */ heroHoverPreview)
/* harmony export */ });
function HeroHoverPreview() {
  this.infoHover = () => {
    var infoItem = document.querySelectorAll('.info-item');
    const cursor = document.querySelector('.cursor');

    infoItem.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        // if (e.target.innerText === 'consult') {
        this.darkMode();
        // this.slideOut(e);
        gsap.to('.cursor', {
          width: e.target.offsetWidth * 1.25,
          height: e.target.offsetHeight,
          left: -e.target.offsetWidth / 2,
          ease: 'power4.out',
        });
        // }
      });
      item.addEventListener('mouseout', (e) => {
        // if (e.target.innerText === 'consult') {
        this.lightMode();

        gsap.to('.cursor', {
          width: 16,
          height: 16,
          left: -16,
          ease: 'power4.out',
        });
        // }
      });
    });
  };
  this.darkMode = () => {
    const elements = document.querySelectorAll(
      '.pages > a, .resume > a, #name, #identity, .info-item'
    );
    const body = document.querySelector('body');
    const resume = document.querySelector('.resume > a');
    elements.forEach((element) => {
      if (!element.classList.contains('text-white')) {
        element.classList.add('text-white');
      }
    });
    body.classList.add('bg-black');
    resume.classList.remove('border-neutral-800');
    resume.classList.add('border-white');
  };
  this.lightMode = () => {
    const elements = document.querySelectorAll(
      '.pages > a, .resume > a, #name, #identity, .info-item'
    );
    const body = document.querySelector('body');
    const resume = document.querySelector('.resume > a');
    elements.forEach((element) => {
      if (element.classList.contains('text-white')) {
        element.classList.remove('text-white');
      }
    });
    body.classList.remove('bg-black');
    resume.classList.remove('border-white');
    resume.classList.add('border-neutral-800');
  };
  // this.slideOut = (e) => {
  //   const item = e;
  //   console.log(e);
  //   gsap.to(e.target, {
  //     opacity: 0,
  //     repeat: 0,
  //     translateX: 10,
  //     duration: .500,
  //     repeat: -1
  //   })
  // }
}

const heroHoverPreview = new HeroHoverPreview();




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
/* harmony import */ var _components_heroHoverPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heroHoverPreview */ "./src/js/components/heroHoverPreview.js");
/**
 * Import tailwind styles
 */

/**
 * Import all js
 */



document.addEventListener('DOMContentLoaded', function () {
  _components_animations__WEBPACK_IMPORTED_MODULE_1__.headingAnimation.animateHeading();
  _components_animations__WEBPACK_IMPORTED_MODULE_1__.headingAnimation.animateCursor(); // animations.headingAnimation.textSlide();
  // animations.headingAnimation.fadeOutOnScorll();

  _components_heroHoverPreview__WEBPACK_IMPORTED_MODULE_2__.heroHoverPreview.infoHover();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map
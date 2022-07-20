/**
 * Import tailwind styles
 */
import '../css/main.css';

/**
 * Import all js
 */

import * as animations from './components/animations';
import * as heroHoverPreview from './components/heroHoverPreview';
import * as loadIn from './components/loadIn';

document.addEventListener('DOMContentLoaded', () => {
  loadIn.loadIn.generateItems();
  loadIn.loadIn.moveItems();
  loadIn.loadIn.scrollItems();
  // animations.headingAnimation.animateHeading();
  // animations.headingAnimation.animateCursor();
  // // animations.headingAnimation.textSlide();
  // animations.headingAnimation.fadeOutOnScorll();
  // heroHoverPreview.heroHoverPreview.infoHover();
});

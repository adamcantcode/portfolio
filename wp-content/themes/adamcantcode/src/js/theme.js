/**
 * Import tailwind styles
 */
import '../css/main.css';

/**
 * Import all js
 */

import * as animations from './components/animations';
import * as heroHoverPreview from './components/heroHoverPreview';

document.addEventListener('DOMContentLoaded', () => {
  animations.headingAnimation.animateHeading();
  animations.headingAnimation.animateCursor();
  animations.headingAnimation.textSlide();
  heroHoverPreview.heroHoverPreview.infoHover();
});

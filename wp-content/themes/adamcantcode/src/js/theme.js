/**
 * Import tailwind styles
 */
import '../css/main.css';

/**
 * Import all js
 */

import * as animations from './components/animations';

document.addEventListener('DOMContentLoaded', () => {
  animations.headingAnimation.animateHeading();
});

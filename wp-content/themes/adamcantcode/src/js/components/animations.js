function HeadingAnimation() {
  this.animateHeading = () => {
    console.log('test');
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

export { headingAnimation };

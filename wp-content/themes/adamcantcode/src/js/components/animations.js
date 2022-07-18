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

export { headingAnimation };

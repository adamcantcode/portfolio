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

    function name() {
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

    function info() {
      console.log('running');
      const infoPanel = gsap.timeline();
      infoPanel.from('.info-item', {
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

    const master = gsap.timeline().add(name()).add(info());

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
  this.animateCursor = () => {
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      gsap.to('.cursor', {
        x: x,
        y: y,
        ease: 'power4.out',
      });
    });
  };
}

const headingAnimation = new HeadingAnimation();

export { headingAnimation };

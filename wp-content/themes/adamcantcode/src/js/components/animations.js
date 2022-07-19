function HeroAnimation() {
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
  this.textSlide = () => {
    console.log('test');
    gsap.to('.font-stroke.first', {
      xPercent: 100,
      duration: 10,
      repeat: -1,
      // repeatDelay: 5,
      // stagger: 1,
      ease: 'linear',
    });
    gsap.to('.font-stroke.second', {
      xPercent: 100,
      duration: 10,
      repeat: -1,
      // repeatDelay: 5,
      // stagger: 1,
      ease: 'linear',
    });
  };
}

const headingAnimation = new HeroAnimation();

export { headingAnimation };

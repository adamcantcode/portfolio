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
      // markers: true
    });
    return nameAnimation;
  };
  this.info = () => {
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
  };
  this.animateCursor = () => {
    window.addEventListener('mousemove', (e) => {
      gsap.to('.cursor', {
        x: e.pageX,
        y: e.pageY,
        ease: 'power4.out',
      });
    });
  };
  this.textSlide = () => {
    console.log('test');
    gsap.to('.font-outline.font-stroke', {
      xPercent: 100,
      duration: 120,
      repeat: -1,
      // repeatDelay: 5,
      // stagger: 1,
      ease: 'linear',
    });
  };
  this.fadeOutOnScorll = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.name-card, .info-panel', {
      opacity: 0,
      stagger: 2,
      duration: 5,
      scrollTrigger: {
        trigger: '#name',
        start: 'top top',
        end: 'bottom top',
        scrub: true, // or time (in seconds) to catch up
        // markers: true,
        invalidateOnRefresh: true,
      },
    });
  };
}

const headingAnimation = new HeroAnimation();

export { headingAnimation };

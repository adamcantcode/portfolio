function LoadIn() {
  this.generateItems = () => {
    console.log('generate');
    const container = document.querySelector('#loadIn');
    const initialElement = document.querySelector('#loadIn .box');
    for (let i = 2; i < 37; i++) {
      const clone = initialElement.cloneNode(true);
      container.append(clone);
      let rotate = i * 5;
      let heightWidth = i * 10;
      let scale = i * 0.15;
      // rotate = rotate.toString() + 'px';

      gsap.set('.box:nth-child(' + i + ')', {
        // scale: i,
        height: heightWidth,
        width: heightWidth,
        rotate: rotate,
        scale: scale,
      });
    }
  };
  this.scrollItems = () => {
    console.log('test');
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.box', {
      stagger: 1,
      rotate: '180deg',
      duration: 3,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom end',
        scrub: 1.5,
        markers: true,
        pin: true,
        anticipatePin: 1,
        // invalidateOnRefresh: true,
      },
    });
  };
}

const loadIn = new LoadIn();

export { loadIn };

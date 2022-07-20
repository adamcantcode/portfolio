function LoadIn() {
  this.generateItems = () => {
    console.log('generate');
    const container = document.querySelector('#loadIn');
    const initialElement = document.querySelector('#loadIn .box');
    for (let i = 2; i < 15; i++) {
      const clone = initialElement.cloneNode(true);
      container.append(clone);
      let heightWidth = i * 20 + 100;
      let scale = i * 0.5;

      gsap.set('.box:nth-child(' + i + ')', {
        // scale: i,
        height: heightWidth,
        width: heightWidth,
        scale: scale,
        // right: '-50%',
        // top: '-50%',
        xPercent: -50,
        yPercent: -50,
        rotate: '30deg',
      });
    }
    initialElement.classList.add('hidden');
  };
  this.scrollItems = () => {
    console.log('test');
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.box', {
      stagger: 1,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#loadIn',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        markers: true,
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
        // invalidateOnRefresh: true,
      },
    });
  };
  this.moveItems = () => {
    document.addEventListener('mousemove', (e) => {
      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box, i) => {
        gsap.registerPlugin(ScrollTrigger);
        var xPos = e.clientX / window.innerWidth - 0.5;
        var yPos = e.clientY / window.innerHeight - 0.5;
        var blur = yPos > 2 ? yPos : yPos + 8; 
        console.log(yPos);
        console.log(blur);
        gsap.to(box, {
          duration: 0.1,
          delay: i / 50,
          x: xPos * 200,
          y: yPos * 200,
          boxShadow: `${xPos * 50}px ${yPos * 50}px ${blur}px 0 rgba(0,0,0,0.15)`,
          ease: Power4.out,
        });
      });
    });
  };
}

const loadIn = new LoadIn();

export { loadIn };

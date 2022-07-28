function HeroHoverPreview() {
  this.infoHover = () => {
    var infoItem = document.querySelectorAll('.info-item');
    const cursor = document.querySelector('.cursor');

    infoItem.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        // if (e.target.innerText === 'consult') {
        this.darkMode();
        // this.slideOut(e);
        gsap.to('.cursor', {
          width: e.target.offsetWidth * 1.25,
          height: e.target.offsetHeight,
          left: -e.target.offsetWidth / 2,
          ease: 'power4.out',
        });
        // }
      });
      item.addEventListener('mouseout', (e) => {
        // if (e.target.innerText === 'consult') {
        this.lightMode();

        gsap.to('.cursor', {
          width: 16,
          height: 16,
          left: -16,
          ease: 'power4.out',
        });
        // }
      });
    });
  };
  this.darkMode = () => {
    const elements = document.querySelectorAll(
      '.pages > a, .resume > a, #name, #identity, .info-item'
    );
    const body = document.querySelector('body');
    const resume = document.querySelector('.resume > a');
    elements.forEach((element) => {
      if (!element.classList.contains('text-white')) {
        element.classList.add('text-white');
      }
    });
    body.classList.add('bg-black');
    resume.classList.remove('border-neutral-800');
    resume.classList.add('border-white');
  };
  this.lightMode = () => {
    const elements = document.querySelectorAll(
      '.pages > a, .resume > a, #name, #identity, .info-item'
    );
    const body = document.querySelector('body');
    const resume = document.querySelector('.resume > a');
    elements.forEach((element) => {
      if (element.classList.contains('text-white')) {
        element.classList.remove('text-white');
      }
    });
    body.classList.remove('bg-black');
    resume.classList.remove('border-white');
    resume.classList.add('border-neutral-800');
  };
  // this.slideOut = (e) => {
  //   const item = e;
  //   console.log(e);
  //   gsap.to(e.target, {
  //     opacity: 0,
  //     repeat: 0,
  //     translateX: 10,
  //     duration: .500,
  //     repeat: -1
  //   })
  // }
}

const heroHoverPreview = new HeroHoverPreview();

export { heroHoverPreview };

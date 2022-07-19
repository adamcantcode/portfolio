function HeroHoverPreview() {
  this.infoHover = () => {
    var infoItem = document.querySelectorAll('.info-item');
    infoItem.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        if (e.target.innerText === 'consult') {
          this.darkMode();
        }
      });
      item.addEventListener('mouseout', (e) => {
        if (e.target.innerText === 'consult') {
          this.lightMode();
        }
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
}

const heroHoverPreview = new HeroHoverPreview();

export { heroHoverPreview };

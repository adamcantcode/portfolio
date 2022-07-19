function HeroHoverPreview() {
  this.infoHover = () => {
    var infoItem = document.querySelectorAll('.info-item');
    console.log(infoItem);
    infoItem.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText === 'consult') {
          this.darkMode();
        }
      });
    });
  };
  this.darkMode = () => {
    const elements = document.querySelectorAll(
      '.pages > a, .resume > a, #name, #identity, .info-item'
    );
    const html = document.querySelector('html');
    elements.forEach((element) => {
      if (!element.classList.contains('text-whtie')) {
        element.classList.add('text-white');
      }
    });
    html.classList.add('bg-black');
  };
}

const heroHoverPreview = new HeroHoverPreview();

export { heroHoverPreview };

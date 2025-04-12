// let accItem = document.getElementsByClassName('accordionItem');
// let accHD = document.getElementsByClassName('accordionItemHeading');
// for (i = 0; i < accHD.length; i++) {
//   accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//   let itemClass = this.parentNode.className;
//   for (i = 0; i < accItem.length; i++) {
//     accItem[i].className = 'accordionItem close';
//   }
//   if (itemClass === 'accordionItem close') {
//     this.parentNode.className = 'accordionItem open';
//   }
// }

const accordionButtons = document.querySelectorAll('[data-accordion]');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('span');

    if (content.classList.contains('hidden')) {
      // Close all other accordions
      accordionButtons.forEach((b) => {
        b.nextElementSibling.classList.add('hidden');
        b.querySelector('span').classList.remove('rotate-180');
      });

      // Open current
      content.classList.remove('hidden');
      arrow.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      arrow.classList.remove('rotate-180');
    }
  });
});

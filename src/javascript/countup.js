const counters = [
  document.getElementById('countup1'),
  document.getElementById('countup2'),
  document.getElementById('countup3'),
  document.getElementById('countup4'),
];

let started = false;

function countUp(counter) {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = target / 200;

  const update = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + '+';
    }
  };

  update();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach((counter) => countUp(counter));
      }
    });
  },
  { threshold: 0.5 },
);

const counterSection = document.getElementById('counter-section');
if (counterSection) {
  observer.observe(counterSection);
}

const navbar = document.querySelector('nav');

// change the item that has the .active class applied
const setActiveElement = (elem) => {
  document.querySelector('nav a.active').classList.remove('active');
  elem.classList.add('active');
}

// Start view transition and pass in a callback on click
navbar.addEventListener('click', async  function (event) {
  if (!event.target.matches('nav a:not(.active)')) {
    return;
  }

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    setActiveElement(event.target);
    return;
  }
  
  document.startViewTransition(() => setActiveElement(event.target));
});


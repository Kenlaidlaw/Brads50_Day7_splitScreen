// setting the variables so that they can be selected/targettedin the program
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// watches for mouse entering or leaving and then adds a class to the container which then changes what CSS is applied
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
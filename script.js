const btn = document.querySelector('.button');

btn.addEventListener('mousedown', () => {
  // Generate random Hex color
  const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  
  // Apply to a CSS variable on the body
  document.body.style.backgroundColor=randomHex;
  btn.textContent = randomHex
});

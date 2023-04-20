//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const button = document.getElementById('btn');
button.addEventListener('click', changeColor);


function changeColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
}

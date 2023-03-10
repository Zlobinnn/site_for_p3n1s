

// получаем ссылки на Canvas элемент и его контекст
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = 768/2;
canvas.height = 1059/2;

// загружаем изображение на Canvas элемент
var image = new Image();
image.src = '1637284217_1-gamerwall-pro-p-izvest-tekstura-oboi-na-zastavku-1.jpg';
image.onload = function() {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// добавляем обработчик события для движения мыши
canvas.addEventListener('mousemove', function(event) {
  // проверяем, была ли нажата кнопка мыши
  if (event.buttons !== 1) {
    return;
  }

  // определяем координаты мыши на Canvas элементе
  var x = event.offsetX;
  var y = event.offsetY;

  // стираем пиксель на указанных координатах
  context.clearRect(x-15, y-15, 30, 30);
});

// добавляем обработчик события для нажатия кнопки мыши
canvas.addEventListener('mousedown', function(event) {
  // запрещаем выделение текста на Canvas элементе
  event.preventDefault();
});






// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = 768;
// canvas.height = 1059;

// const image = new Image();
// image.src = '1637284217_1-gamerwall-pro-p-izvest-tekstura-oboi-na-zastavku-1.jpg';
// image.onload = function() {
//   ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
// }

// canvas.addEventListener('touchmove', function(e) {
//   e.preventDefault(); // отключаем стандартное поведение браузера при касании
//   const touch = e.touches[0];
//   const x = touch.pageX - canvas.offsetLeft;
//   const y = touch.pageY - canvas.offsetTop;
//   ctx.clearRect(x-20, y-20, 40, 40);
// });
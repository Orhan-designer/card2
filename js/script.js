//Расчёт рейтинга (второй способ)
//Создаём код со свойствами для всей карточки
let card = {
  //создаём объект для всей карточки
  poster: "poster.jpg",
  type: "type.png",
  sale: "sale.png",
  title: "Тайная жизнь,",
  subtitle: "домашних животных 2",
  price: 50,
  currency: "руб.",
  rating: 4,
  buy: "order.jpg",
  act: true
};

//Создаём код со свойствами для всей toy
let toy = {
  //создаём объект для всей карточки
  poster: "toy4.jpg",
  title: "История игрушек 4",
  subtitle: "Приключения Вилкинса",
  price: 60,
  currency: "руб.",
  rating: 4,
  buy: "order.jpg",
  act: true
};

//Создаём код со свойствами для всей ferd
let ferdinard = {
  //создаём объект для всей карточки
  poster: "ferd.jpg",
  title: "Фердинанд",
  subtitle: "Побег из коровника",
  price: 40,
  currency: "руб.",
  rating: 4,
  buy: "order.jpg",
  act: true
};

//Полная стоимость
let fullPrice = `${card.price},00 ${card.currency}`;
let toyFullPrice = `${toy.price},00 ${toy.currency}`;
let ferFullPrice = `${ferdinard.price},00 ${ferdinard.currency}`;

//Расчёт акции
let salePrice = `${Math.round(card.price * 0.9)},00${card.currency}`; //округляем до целого числа
let saleToyPrice = `${Math.round(toy.price * 0.9)},00${toy.currency}`;
let saleFerPrice = `${Math.round(ferdinard.price * 0.9)},00${ferdinard.currency}`;

let stars = "";
switch (
  card.rating //сюда вставляем значения из объекста card и проверяем его
) {
  case 1:
    stars =
      '<span class="material-icons">star star_border star_border star_border star_border</span>';
    break;

  case 1.5:
    stars =
      '<span class="material-icons">star star_half star_border star_border star_border</span>';
    break;

  case 2:
    stars =
      '<span class="material-icons">star star star_border star_border star_border</span>';
    break;

  case 2.5:
    stars =
      '<span class="material-icons">star star star_half star_border star_border</span>';
    break;

  case 3:
    stars =
      '<span class="material-icons">star star star star_border star_border</span>';
    break;

  case 3.5:
    stars =
      '<span class="material-icons">star star star star_half star_border</span>';
    break;

  case 4:
    stars = '<span class="material-icons">star star star star star_border</span>';
    break;

  case 4.5:
    stars = '<span class="material-icons">star star star star star_half</span>';
    break;

  case 5:
    stars = '<span class="material-icons">star star star star star</span>';
    break;

  default:
    stars =
      '<span class="material-icons">star star_border star_border star_border star_border</span>';
}

let finalPrice = "";
if (card.act) {
  finalPrice = `<div>${salePrice}</div> <div>${fullPrice}</div>`;
} else finalPrice = `<div>${fullPrice}</div>`;

let toyPrice = "";
if (toy.act) {
  toyPrice = `<div>${saleToyPrice}</div> <div>${toyFullPrice}</div>`;
} else toyPrice = `<div>${toyFullPrice}</div>`;

let ferPrice = "";
if (ferdinard.act) {
  ferPrice = `<div>${saleFerPrice}</div> <div>${ferFullPrice}</div>`;
} else ferPrice = `<div>${ferFullPrice}</div>`;

let s = `
  <div id="card">
    <div class="poster">
      <img src="./images/${card.poster}" alt="">
    </div>
    <div class="title">
      <div>${card.title}</div>
      <div>${card.subtitle}</div>
    </div>
    <div class="price">
      ${finalPrice}
    </div>
    <div class="rating">
      <span class="material-icons">${stars}</span>
    </div>
    <button>
      <a href="#"><img src="./images/${card.buy}" class="hue"></a>
    </button>
    <div class="prelative">
      <img src="./images/${card.type}" alt="">
      <img src="./images/${card.sale}" alt="" id="sale">
    </div>
  </div>
  <div id="toy">
    <div class="poster">
      <img src="./images/${toy.poster}" alt="">
    </div>
    <div class="title">
      <div>${toy.title}</div>
      <div>${toy.subtitle}</div>
    </div>
    <div class="price">
      ${toyPrice}
    </div>
    <div class="rating">
      <span class="material-icons">${stars}</span>
    </div>
    <button>
      <a href="#"><img src="./images/${card.buy}" class="hue"></a>
    </button>
  </div>
  <div id="ferdinard">
    <div class="poster">
      <img src="./images/${ferdinard.poster}" alt="">
    </div>
    <div class="title">
      <div>${ferdinard.title}</div>
      <div>${ferdinard.subtitle}</div>
    </div>
    <div class="price">
      ${ferPrice}
    </div>
    <div class="rating">
      <span class="material-icons">${stars}</span>
    </div>
    <button>
      <a href="#"><img src="./images/${ferdinard.buy}" class="hue"></a>
    </button>
  </div> 
`;

cards.innerHTML = s;

if (card.act) sale.style.opacity = "1";
else sale.style.opacity = "0";



//Расчёт рейтинга (второй способ)
//Создаём код со свойствами для всей карточки
let card = [
  {
    //создаём объект для всех карточки
    poster: "poster.jpg",
    type: "type.png",
    sale: "sale.png",
    title: "Тайная жизнь,",
    subtitle: "домашних животных 2",
    price: 50,
    currency: "руб.",
    rating: 3,
    buy: "order.jpg",
    act: true,
  },

  {
    poster: "toy4.jpg",
    type: "type.png",
    sale: "sale.png",
    title: "История игрушек 4",
    subtitle: "Приключения Вилкинса",
    price: 60,
    currency: "руб.",
    rating: 3,
    buy: "order.jpg",
    act: false,
  },

  {
    poster: "ferd.jpg",
    type: 'type.png',
    sale: 'sale.png',
    title: "Фердинанд",
    subtitle: "Побег из коровника",
    price: 40,
    currency: "руб.",
    rating: 3,
    buy: "order.jpg",
    act: true,
  },
];

let s = "";

for (let i = 0; i < card.length; i++) {
  //Полная стоимость
  let fullPrice = `${card[i].price},00 ${card[i].currency}`;

  //Расчёт акции
  let salePrice = `${Math.round(card[i].price * 0.9)},00${card[i].currency}`; //округляем до целого числа

  //Расчёт рейтинга
  let stars = "";
  switch (
    card[i].rating //сюда вставляем значения из объекста card и проверяем его
  ) {
    case 1:
      stars =
        'star star_border star_border star_border star_border';
      break;

    case 1.5:
      stars =
        'star star_half star_border star_border star_border';
      break;

    case 2:
      stars =
        'star star star_border star_border star_border';
      break;

    case 2.5:
      stars =
        'star star star_half star_border star_border';
      break;

    case 3:
      stars =
        'star star star star_border star_border';
      break;

    case 3.5:
      stars =
        'star star star star_half star_border';
      break;

    case 4:
      stars =
        'star star star star star_border';
      break;

    case 4.5:
      stars =
        'star star star star star_half';
      break;

    case 5:
      stars = 'star star star star star';
      break;

    default:
      stars =
        'star_border star_border star_border star_border star_border';
  }

  let finalPrice = "", saleImg = "";

  if (card[i].act) {
    finalPrice = `<div>${salePrice}</div> 
                  <div>${fullPrice}</div>`;
    saleImg = `<img style="opacity: 1" src="./images/${card[i].sale}" alt="">`;
  } else  {
    finalPrice = `<div>${fullPrice}</div>`;
    saleImg = `<img style="opacity: 0" src="./images/${card[i].sale}" alt=""`;
  }

  s += `
  <div id="card">
    <div class="poster">
      <img src="./images/${card[i].poster}" alt="">
      ${saleImg}
      <img src="./images/${card[i].type}">
    </div>
    <div class="title">
      <div>${card[i].title}</div>
      <div>${card[i].subtitle}</div>
    </div>
    <div class="price">
      ${finalPrice}
    </div>
    <div class="rating">
      <span class="material-icons">${stars}</span>
    </div>
    <div class="order">
      <a href="#"><img src="./images/${card[i].buy}" class="hue"></a>
    </div>
  </div>
`;
}

cards.innerHTML = s;

/* if (card.act) sale.style.opacity = "1";
else sale.style.opacity = "0"; */

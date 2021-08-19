//Первый способ создания кода для звёздного рейтинга
/* "use strict";

const ratings = document.querySelectorAll(".rating");

if (ratings.length > 0) {
  initRatings();
}

//Основная функция
function initRatings() {
  let ratingActive, ratingValue;
  //"Бегаем" по всем рейтингам на странице
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }

  //Инициализируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }

  //Инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }

  //Изменяем ширину активных звёзд
  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  //Возможность указать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener("mouseenter", function (e) {
        //Обновление переменных
        initRatingVars(rating);
        //Обновление активных звёзд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        //Обновление активных звёзд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        //Обновление переменных
        initRatingVars(rating);
        if (rating.dataset.ajax) {
          //"Отправить" на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          //Отобразить указанную оценку
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        }
      });
    }
  }
} */
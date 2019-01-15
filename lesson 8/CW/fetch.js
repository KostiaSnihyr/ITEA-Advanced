/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      fetch()

  //   })
  //   .then( func)

  
  fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
        .then(
          (resp) => {
            let randomPromiseElement = resp.json().then(
              (arr) => {
                resp = arr[randomInteger(0, arr.length - 1)];
                return resp;
              }
            );
            console.log(randomPromiseElement);
            return fetch("http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=5")
              .then(
                resp2 => {
                  return resp2.json();
                }
            )
          }
        )
        .then(
          (resp) => {
            console.log(resp[0]);
          }
        )

  function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    }
  // const dataFromServer = await fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2");
  // const resp = await dataFromServer.json();
  // console.log(resp);
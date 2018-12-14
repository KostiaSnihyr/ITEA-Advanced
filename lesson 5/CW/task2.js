/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white'
  }

  function myCall( back ){
    document.body.style.background = back;
    document.body.style.color = this.color;

    let h1 = document.createElement('h1');
    h1.innerText = 'I know how binding works in JS';
    document.body.appendChild(h1);
  }
  myCall.call( colors, 'red' );


  function myBind() {
    document.body.style.background = this.background;
    document.body.style.color = this.color;

    let h1 = document.createElement('h1');
    h1.innerText = 'I know how binding works in JS';
    document.body.appendChild(h1);
  }

  myBind.bind(colors)();


  function myApply(text) {
    document.body.style.background = this.background;
    document.body.style.color = this.color;

    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1);
  }

  myApply.apply(colors, ['I know how binding works in JS']);


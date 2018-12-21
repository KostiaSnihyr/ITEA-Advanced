
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary



  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>

    <button></button>
  </form>


    <input />

  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/


let inputsData = {
  name: '',
  age: '',
  pass: ''
}

let inputs = document.getElementsByTagName('input');
let inputsArray = Array.from(inputs);
let button = document.getElementById('button');
let show = document.getElementById('show');
let show2 = document.getElementById('show2');

button.addEventListener('click', function(event) {
  event.preventDefault();

    inputsArray.forEach(function(element) {
      if(element.name === 'name') {
        inputsData.name = element.value;
      } else if(element.name === 'age') {
        inputsData.age = element.value;
      } else if(element.name === 'password') {
        inputsData.pass = element.value;
      }
    });

  let stringifiedObject = JSON.stringify(inputsData);
  show.innerText = stringifiedObject;
});

let inputToParse = document.getElementById('toParse');
let buttonParse = document.getElementById('doParse');

buttonParse.addEventListener('click', function(event) {
  event.preventDefault();
  let parsedValue = JSON.parse(inputToParse.value);
  console.log(parsedValue);
  show2.innerText = parsedValue;
});
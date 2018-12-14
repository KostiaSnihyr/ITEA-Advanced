/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.status = "idle";
  

  this.changeStatus = function( status ) {
    this.status = status
    console.log(this.name + " " + status);
  }
  this.showProps = function() {
    for(var key in this) {
      console.log(this[key], key);
    }
  }
}

var myDog = new Dog('dogName', 'dogBreed');
// myDog.showProps();


var myDow = new Dog('Doggy', 'Breed1')
// myDog.showProps();



myDog.changeStatus("run");

console.log(myDog, myDow)
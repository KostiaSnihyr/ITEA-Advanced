/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var train = {};
train.name = 'trainName';
train.speed = 100;
train.passengers = 10;
train.move = function(newSpeed) {
    this.speed += newSpeed;
    console.log(this.name + ' везет ' + this.passengers + ' со скоростью ' + this.speed);
}
train.stop = function() {
    this.speed = 0;
    console.log('Поезд ' + this.name + ' остановился. Скорость ' + this.speed);
}
train.takePassengers = function(numb) {
    train.passengers += numb;
    console.log(this.passengers);
}

train.move();
train.stop;
train.takePassengers(2);

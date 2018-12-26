import fly from './modules/fly';
import swim from './modules/swim';
import eat from './modules/eat'
import hunt from './modules/hunt'

function Bird(name) {
    this.name = name;
    this.canFly = fly;
    this.canSwim = swim;
    this.canEat = eat;
    this.canHunt = hunt;

}

let chicken = new Bird('chicken');
let eagle = new Bird('eagle');

chicken.canFly();
chicken.canSwim();
chicken.canEat();

eagle.canHunt();
eagle.canEat();

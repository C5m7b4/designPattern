import { add } from './modules/math';

console.log('you are ready to start coding typescript...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';
main.appendChild(child);
root.appendChild(main);

import { HairDryer } from './HairDryer';
import { TurnOffState } from './TurnOffState';

const hairDryer = new HairDryer(new TurnOffState());
hairDryer.switchState();
hairDryer.switchState();
hairDryer.switchState();
hairDryer.switchState();
hairDryer.switchState();

const identity = <T, U>(value: T, message: U): T => {
  console.log(message);
  return value;
};

console.log(identity<number, string>(1, 'number'));

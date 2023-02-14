import { HairDryer } from './HairDryer';
import { HairDryerState } from './types';
import { ColdAirState } from './ColdAirState';

export class StrongColdAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log('Start to enter cold air state');
    context.setState(new ColdAirState());
    console.log('Blowing cold air');
  }
}

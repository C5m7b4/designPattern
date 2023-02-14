import { HairDryer } from './HairDryer';
import { HairDryerState } from './types';
import { StrongColdAirState } from './StrongColdAirState';

export class HotAirState implements HairDryerState {
  doAction(context: HairDryer) {
    console.log('Start to enter strong cold air state');
    context.setState(new StrongColdAirState());
    console.log('Blowing strong cold air');
  }
}

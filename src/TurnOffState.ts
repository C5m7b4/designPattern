import { HairDryer } from './HairDryer';
import { HairDryerState } from './types';
import { StrongHotAirState } from './StrongHotAirState';

export class TurnOffState implements HairDryerState {
  doAction(context: HairDryer) {
    console.log('Start to enter strong hot air state');
    context.setState(new StrongHotAirState());
    console.log('Blowing strong hot air');
  }
}

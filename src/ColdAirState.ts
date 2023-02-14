import { HairDryer } from './HairDryer';
import { HairDryerState } from './types';
import { TurnOffState } from './TurnOffState';

export class ColdAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log('Turn off the hair dryer');
    context.setState(new TurnOffState());
  }
}

import { HairDryer } from './HairDryer';
import { HairDryerState } from './types';
import { HotAirState } from './HotAirState';

export class StrongHotAirState implements HairDryerState {
  doAction(context: HairDryer): void {
    console.log('Start to enter hot air state');
    context.setState(new HotAirState());
    console.log('blowing hot air');
  }
}

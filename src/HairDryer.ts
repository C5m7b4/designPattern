import { HairDryerState } from './types';

export class HairDryer {
  constructor(private state: HairDryerState) {}

  getState(): HairDryerState {
    return this.state;
  }

  setState(state: HairDryerState) {
    this.state = state;
  }

  switchState() {
    this.state.doAction(this);
  }
}

import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _rangerName: string;
  private _energy: EnergyType;

  static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._rangerName = name;
    this._energy = 'stamina';

    Ranger.archetypesInstances += 1;
  }

  get name(): string {
    return this._rangerName;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this.archetypesInstances;
  }
}

export default Ranger;

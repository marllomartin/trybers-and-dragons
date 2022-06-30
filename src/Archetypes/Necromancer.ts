import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _necromancerName: string;
  private _energy: EnergyType;

  static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._necromancerName = name;
    this._energy = 'mana';

    Necromancer.archetypesInstances += 1;
  }

  get name(): string {
    return this._necromancerName;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this.archetypesInstances;
  }
}

export default Necromancer;

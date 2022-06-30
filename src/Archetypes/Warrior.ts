import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _warriorName: string;
  private _energy: EnergyType;

  static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._warriorName = name;
    this._energy = 'stamina';

    Warrior.archetypesInstances += 1;
  }

  get name(): string {
    return this._warriorName;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this.archetypesInstances;
  }
}

export default Warrior;

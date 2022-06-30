import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _mageName: string;
  private _energy: EnergyType;

  static archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._mageName = name;
    this._energy = 'mana';

    Mage.archetypesInstances += 1;
  }

  get name(): string {
    return this._mageName;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this.archetypesInstances;
  }
}

export default Mage;

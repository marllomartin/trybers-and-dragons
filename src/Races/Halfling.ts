import Race from './Race';

class Halfling extends Race {
  private _halflingName: string;
  private _halflingDexterity: number;
  private _maxLifePoints: number;

  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._halflingName = name;
    this._halflingDexterity = dexterity;
    this._maxLifePoints = 60;
    Halfling.racesInstances += 1;
  }

  get name(): string {
    return this._halflingName;
  }

  get dexterity(): number {
    return this._halflingDexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Halfling;

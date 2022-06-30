import Race from './Race';

class Orc extends Race {
  private _orcName: string;
  private _orcDexterity: number;
  private _maxLifePoints: number;

  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._orcName = name;
    this._orcDexterity = dexterity;
    this._maxLifePoints = 74;
  
    Orc.racesInstances += 1;
  }

  get name(): string {
    return this._orcName;
  }

  get dexterity(): number {
    return this._orcDexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Orc;

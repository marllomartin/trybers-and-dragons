import Race from './Race';

class Elf extends Race {
  private _elfName: string;
  private _elfDexterity: number;
  private _maxLifePoints: number;

  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._elfName = name;
    this._elfDexterity = dexterity;
    this._maxLifePoints = 99;
  
    Elf.racesInstances += 1;
  }

  get name(): string {
    return this._elfName;
  }

  get dexterity(): number {
    return this._elfDexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Elf;

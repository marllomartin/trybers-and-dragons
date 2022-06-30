import Race from './Race';

class Dwarf extends Race {
  private _dwarfName: string;
  private _dwarfDexterity: number;
  private _maxLifePoints: number;

  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._dwarfName = name;
    this._dwarfDexterity = dexterity;
    this._maxLifePoints = 80;
  
    Dwarf.racesInstances += 1;
  }

  get name(): string {
    return this._dwarfName;
  }

  get dexterity(): number {
    return this._dwarfDexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Dwarf;

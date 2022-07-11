import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  player: Fighter;
  monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this.player = player;
    this.monsters = monsters;
  }

  fight(): number {
    this.monsters.forEach((monster: SimpleFighter) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        monster.attack(this.player);
        this.player.attack(monster);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;

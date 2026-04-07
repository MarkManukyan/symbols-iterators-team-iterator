import Team from './classes/Team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Маг',
  type: 'Mage',
  health: 40,
  level: 1,
  attack: 60,
  defence: 5,
};

const team = new Team();
team.addAll(char1, char2);

for (const character of team) {
  console.log(character);
}

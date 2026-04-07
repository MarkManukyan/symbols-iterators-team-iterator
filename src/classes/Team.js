class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  addAll(...characters) {
    this.members.push(...characters);
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

export default Team;

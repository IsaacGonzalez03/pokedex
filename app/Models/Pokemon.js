export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url

  }
  get wildTemplate() {
    return `
      <li onclick="app.pokemonController.getActivePokemon('${this.url}')">${this.name}</li>
    `
  }




}


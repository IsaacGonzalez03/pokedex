export class ActivePokemon {
  constructor({ name, sprites, weight, height, type, url }) {
    this.name = name
    this.img = sprites
    this.weight = weight
    this.height = height
    this.type = type
    this.url = url

  }
  get activeTemplate() {
    return `
    
    <div>${this.name}${this.img}${this.weight}${this.height}${this.type}</div>
    
    `
  }
}



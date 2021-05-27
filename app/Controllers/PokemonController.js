import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeService } from "../Services/PokeService.js"

function _draw() {
  let template = ''
  ProxyState.pokemon.forEach(p => template += p.wildTemplate)
  document.getElementById('wild-pokemon').innerHTML = template
}
export class PokemonController {
  constructor() {
    ProxyState.on('pokemon', _draw)
    this.getPokemon()
    _draw()
  }
  getPokemon() {
    try {
      pokeService.getPokemon()

    } catch (error) {
      alert(error.message)
    }
  }
  getActivePokemon(url) {
    try {
      pokeService.getActivePokemon(url)
    } catch (error) {
      alert(error.message)
    }
  }

}
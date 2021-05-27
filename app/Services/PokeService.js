import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";


class PokeService {
  async getPokemon() {

    let res = await pokeApi.get()
    console.log(res)
    ProxyState.pokemon = res.data.results.map(p => new Pokemon(p))
    console.log(ProxyState.pokemon)
  }
  async getActivePokemon(url) {
    let res = await axios.get(url)
    console.log(res, url)
    ProxyState.activePokemon = new ActivePokemon(res.data)

  }


}

export const pokeService = new PokeService()
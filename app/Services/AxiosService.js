export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/pokemon'
})
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

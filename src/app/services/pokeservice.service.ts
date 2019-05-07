import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  searchPokes(toSearch) {
    toSearch.preventDefault()
    axios.get('https://pokeapi.co/api/v2/pokemon/' + toSearch)
      .then(res => {
        console.log(res.data)
      })
  }

  constructor() { }

  getPokes(): any[] {
    let pokeSprites = []
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        res.data.results.forEach(pokemon => {
          axios.get(pokemon.url)
            .then(results => {
              pokeSprites.push(results.data)
              if (pokeSprites.length == 20) {
                return pokeSprites;
              }
            })
        })
      })
    return pokeSprites;
  }

  changePage(page): any[] {
    if (page < 0) {
      page = 0
    }
    let pokeSprites = []
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=' + page + '&limit=20')
      .then(res => {
        res.data.results.forEach(pokemon => {
          axios.get(pokemon.url)
            .then(results => {
              pokeSprites.push(results.data)
              if (pokeSprites.length == 20) {
                return pokeSprites;
              }
            })
        })
      })
    return pokeSprites;
  }
}

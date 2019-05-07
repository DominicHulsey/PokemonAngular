import { Component, OnInit } from '@angular/core';
import { PokeService } from "../services/pokeservice.service"


@Component({
  selector: 'pokehome',
  templateUrl: './pokehome.component.html',
  styleUrls: ['./pokehome.component.css']
})
export class PokehomeComponent implements OnInit {
  public pokeData: any[];
  public page: number = 0;
  constructor(private _ps: PokeService) {
    this.pokeData = _ps.getPokes();
    console.log(this.pokeData)
  }

  getPoke(pokemon) {
    let toSearch = pokemon.toLowerCase();
    this._ps.searchPokes(toSearch)
  }

  change(direction) {
    if (direction == "next") {
      this.page += 20;
    }
    else this.page -= 20;
    this.pokeData = this._ps.changePage(this.page);
  }

  ngOnInit() {
  }

}

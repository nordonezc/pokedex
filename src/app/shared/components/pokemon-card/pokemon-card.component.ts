import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../models/modal';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input("pokemon")
  pokemonMap: Map<number, Pokemon> = new Map();

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  openDetailInfo(id: number){
    this.modalService.open({
      type: ModalType.confirmation,
      closeable: true,
      background: true,
      tittle: this.pokemonMap.get(id).name,
      body: this.pokemonMap.get(id).weight + '',
      pokemon: this.pokemonMap.get(id)
    })
  }

}

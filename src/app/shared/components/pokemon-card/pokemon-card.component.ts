import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../models/modal';
import { PokemonAdapterService } from '../../services/pokemon-adapter.service';
import { Evolution } from '../../models/evolution';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemon')
  pokemonMap: Map<number, Pokemon> = new Map();

  constructor(
    public modalService: ModalService,
    public pokemonAdapter: PokemonAdapterService
  ) {}

  ngOnInit(): void {}

  openDetailInfo(id: number) {
    this.pokemonAdapter
      .getEvolution(this.pokemonMap.get(id).evolutionID.id)
      .subscribe((answer) => {
        this.openModalWithInfo(id, answer);
      });
  }

  openModalWithInfo(id: number, evolution: Evolution[]) {
    this.modalService.open({
      type: ModalType.confirmation,
      closeable: true,
      background: true,
      tittle: this.pokemonMap.get(id).name,
      pokemon: this.pokemonMap.get(id),
      evolution: evolution,
    });
  }
}

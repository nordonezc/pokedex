import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ModalService } from '../../services/modal.service';
import { InformationDetail } from '../../models/evolution';
import { PokemonAdapterService } from '../../services/pokemon-adapter.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public pokemon: Pokemon;

  constructor(
    public pokemonAdapter: PokemonAdapterService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.pokemon = this.modalService.modalInfo.pokemon;
  }

  isIndexEqualToTotalEvolves(index: number, evolveDetail: InformationDetail[] ):boolean{
    return index ==  evolveDetail.length-1;
  }
}

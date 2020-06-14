import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public pokemon: Pokemon;

  constructor(public httpClient: HttpClient, public modalService: ModalService) {
   }

  ngOnInit(): void {
    this.pokemon = this.modalService.modalInfo.pokemon;
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonAdapterService } from './services/pokemon-adapter.service';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [PokemonCardComponent, ModalComponent, PaginationComponent, DetailComponent],
  imports: [CommonModule],
  exports: [PokemonCardComponent, ModalComponent, PaginationComponent],
  providers: [PokemonAdapterService],
})
export class SharedModule {}

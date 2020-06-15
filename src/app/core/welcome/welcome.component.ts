import { Component, OnInit } from '@angular/core';
import { PokemonAdapterService } from 'src/app/shared/services/pokemon-adapter.service';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalType } from 'src/app/shared/models/modal';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  pokemonMap: Map<number, Pokemon>;
  amountofPokemon: number = 808;

  constructor(
    public pokemonAdapter: PokemonAdapterService,
    public pagination: PaginationService,
    private route: ActivatedRoute,
    public router: Router,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {

    this.pokemonMap = new Map();
    this.modalService.open({
      type: ModalType.loading,
    });

    this.route.paramMap.subscribe((paramMap) => {
      this.pagination.pageNumber = +paramMap.get('id');
      if (this.pagination.pageNumber % 1 != 0) {
        this.goToFixedPage(this.pagination.pageNumber);
      }
      if (this.pagination.pageNumber > 40) {
        this.goToHigherPage();
      }
      this.fillList(this.pagination.pageNumber);
    });
  }

  /**
   * Fill the list to show based on the page list
   * @param page page number
   */
  fillList(page: number): void {
    for (
      let index = 20 * (page - 1);
      index < 20 * page && this.isLowerThanTotalOfPokemon(index);
      index++
    ) {
      this.pokemonAdapter.getPokemon(index + 1).subscribe((answer) => {
        this.pokemonMap.set(index + 1, answer);
        if (this.isPokemonReadyToShow(index)) {
          this.modalService.close();
        }
      });


    }
  }

  isPokemonReadyToShow(index: number): boolean {
    return this.pokemonMap.size == 20 || (index>800 && this.pokemonMap.size == 7)  ;
  }

  /**
   * Check if given param is lower than the available amount of pokemon
   * @param index Pokemon id to retrieve from adapter
   */
  isLowerThanTotalOfPokemon(index: number): boolean {
    return index < this.amountofPokemon;
  }

  /**
   * Redirect to the last available page
   */
  goToHigherPage() {
    this.router.navigate(['/page', 41]);
  }

  /**
   * Redirect to the page withouth decimals
   */
  goToFixedPage(page: number) {
    this.router.navigate(['/page', Math.trunc(page)]);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Use this to consume the origin of the pokemon information
 * @author Nicolas Ordoñez Chala
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonAdapterService {

  /**
   * URL to consume the pokemon adapter
   */
  private urlPokemonAdapter = 'https://pokemon-adapter.herokuapp.com/pokemon/';

  /**
   * Init the needed variables to use it along the service
   * @param httpClient Client to consume http external services
   */
  constructor(public httpClient: HttpClient) { }

  /**
   * Get the information for the rest service
   * @param id - Pokemon id to consult
   */
  getPokemon(id: number): Observable<any>{
    return this.httpClient.get(this.urlPokemonAdapter + id);
  }
}

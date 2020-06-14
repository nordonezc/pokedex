export interface Link {
  rel: string;
  href: string;
}

export interface PokemonID {
  id: number;
  links: Link[];
}

export interface InformationDetail {
  name: string;
  pokemonID?: PokemonID;
}

export interface Evolution {
  informationDetail: InformationDetail[];
}

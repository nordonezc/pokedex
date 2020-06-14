import { SafeUrl } from '@angular/platform-browser';

export interface Stat {
  name: string;
  baseStat: number;
}

export interface Link {
  rel: string;
  href: string;
}

export interface EvolutionID {
  id: number;
  links?: Link[];
}

export interface Pokemon {
  abilities: string[];
  baseExperience: number;
  height: number;
  name: string;
  types: string[];
  weight: number;
  stats: Stat[];
  evolutionID: EvolutionID;
  description: string;
  image: string;
}

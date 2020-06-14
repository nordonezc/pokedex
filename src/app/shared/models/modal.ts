import { Pokemon } from './pokemon';
import { Evolution } from './evolution';

export interface ModalInfo {
  type: ModalType;
  tittle?: string;
  background?: boolean;
  closeable?: boolean;
  redirect?: number;
  pokemon?: Pokemon;
  evolution?: Evolution[];
}

export enum ModalType {
  loading = '#loadingModal',
  confirmation = '#confirmationModal',
}

import { Pokemon } from './pokemon';

export interface ModalInfo {
  type: ModalType;
  tittle?: string;
  body?: string;
  background?: boolean;
  closeable?: boolean;
  redirect?: number;
  pokemon?: Pokemon;
}

export enum ModalType {
  loading = '#loadingModal',
  confirmation = '#confirmationModal',
}

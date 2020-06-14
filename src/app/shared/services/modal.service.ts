import { Injectable } from '@angular/core';
import { ModalInfo } from '../models/modal';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  openModal: String = '';
  modalInfo: ModalInfo = {} as ModalInfo;

  constructor() { }

  open(modalInfo: ModalInfo){
    this.openModal = modalInfo.type;
    this.modalInfo = modalInfo;
    $(modalInfo.type).modal('show');
  }

  close(){
    $(this.openModal).modal('hide');
  }
}

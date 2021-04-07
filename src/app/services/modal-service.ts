import { Injectable } from "@angular/core";
import { NgbModal, NgbModalOptions, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { LaunchDetailsComponent } from "../components/launch-details/launch-details.component";
import { ILaunch } from "../models/launch.model";

@Injectable({providedIn: "root"})
export class ModalService {

    constructor(private ngbModal: NgbModal) { }
    
    public openLaunchDetailsModal(record: ILaunch, modalSize: ModalSize): void {
        const config: NgbModalOptions = {
            size: modalSize
          }
        const modalRef: NgbModalRef = this.openModal(LaunchDetailsComponent, config);
        (modalRef.componentInstance).launch = record;
    }

    public openModal(component: any, modalOptions: NgbModalOptions): NgbModalRef {
          return this.ngbModal.open(component, modalOptions);
    }
}

export enum ModalSize {
    small = 'sm',
    lg = 'lg',
    xl = 'xl'
}
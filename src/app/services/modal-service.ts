import { Injectable } from "@angular/core";
import { NgbModal, NgbModalOptions, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { LaunchDetailsComponent } from "../components/launch-details/launch-details.component";
import { ILaunch } from "../models/launch.model";

/// Helper service for interacting with modals.

@Injectable({ providedIn: "root" })
export class ModalService {

    constructor(private ngbModal: NgbModal) { }

    /// Opens launch details modal.
    /// Requires ModalSize and launch record to display details of.
    public openLaunchDetailsModal(record: ILaunch, modalSize: ModalSize): void {
        const config: NgbModalOptions = {
            size: modalSize
        }
        const modalRef: NgbModalRef = this.openModal(LaunchDetailsComponent, config);
        (modalRef.componentInstance).launch = record;
    }

    /// Making use of NgbModal to open the modal.
    private openModal(component: any, modalOptions: NgbModalOptions): NgbModalRef {
        return this.ngbModal.open(component, modalOptions);
    }
}

/// ModalSizes defined as enum list.
export enum ModalSize {
    small = 'sm',
    lg = 'lg',
    xl = 'xl'
}
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ILaunch } from 'src/app/models/launch.model';

/// Component to display details about a launch.
/// Takes an input of a launch object.
@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  @Input() public launch: ILaunch;

  constructor(private activeModalService: NgbActiveModal) {
  
   }

  ngOnInit(): void {
  }

  public close = () => this.activeModalService.close();
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ILaunch } from 'src/app/models/launch.model';

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

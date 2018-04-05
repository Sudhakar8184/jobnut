import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.css']
})
export class HrDetailsComponent implements OnInit {
  hrdetailForm: FormGroup;
  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }



  constructor() {
    this.buildFormGroup();
   }

   buildFormGroup(): void {
    const fg = {
      'name': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'curremployer': new FormControl(null, [Validators.required]),
      'currlocation': new FormControl(null, Validators.required),
      'profile': new FormControl(null, Validators.required),
    };
    this.hrdetailForm = new FormGroup(fg);
  }

  ngOnInit() {
  }

  
  onSubmit() {
    console.log(this.hrdetailForm);
  }
}
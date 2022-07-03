import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-preview-controls',
  templateUrl: './preview-controls.component.html',
  styleUrls: ['./preview-controls.component.scss']
})
export class PreviewControlsComponent implements OnInit {
  addressForm!: FormGroup;


  states = [
    {
      'name': 'Alabama',
      'abbreviation': 'AL'
    },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      large: [false],
      quantity: [10],
      name: [null, Validators.required],
      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      shipping: ['free', Validators.required],
      tracking: [true],
      arrival: [null],
      postalCode: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    });
  }

}

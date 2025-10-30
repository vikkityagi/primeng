import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  userForm!: FormGroup;
  genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],  
      gender: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // this.messageService.add({ severity: 'success', summary: 'Form Submitted', detail: JSON.stringify(this.userForm.value) });
      console.log('Form Data:', this.userForm.value);
      this.userForm.reset();
    } else {
      // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all fields correctly!' });
    }
  }

}

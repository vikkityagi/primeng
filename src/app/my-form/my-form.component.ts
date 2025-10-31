import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  userForm!: FormGroup;
  maxDate!: Date;

  genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  
  fatherGenders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];

  courses = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.maxDate = new Date();

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dob: [null, Validators.required],
      course: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherEmail: ['', [Validators.required, Validators.email]],
      fatherGender: ['', Validators.required],
      fatherAddress: ['', Validators.required],
      fatherDob: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();  // ✅ show all errors
      return;
    }
    if (this.userForm.valid) {
      // this.messageService.add({ severity: 'success', summary: 'Form Submitted', detail: JSON.stringify(this.userForm.value) });
      console.log('Form Data:', this.userForm.value);
      console.log('Gender:', this.userForm.get('gender')?.value);
      // console.log('Form Data:', this.userForm.value);
      this.userForm.reset();
    } else {

      // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all fields correctly!' });
    }
  }

}

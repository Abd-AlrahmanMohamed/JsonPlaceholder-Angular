import { IUser } from './../../ViewModels/iuser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GenericApiHandlerService } from '../../Service/generic-apihandler.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {

  constructor(
    private hClient: HttpClient,
    private gService: GenericApiHandlerService
  ) {}

  addUserForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]{5,}'),
    ]),
    username: new FormControl('', Validators.pattern('[a-zA-Z0-9]{9,}')),
    email: new FormControl(
      '',
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')
    ),
    address: new FormGroup({
      street: new FormControl('', Validators.pattern('[a-zA-z]{2,}')),
      suit: new FormControl(''),
      city: new FormControl('', Validators.pattern('[a-zA-z]{4,}')),
      zipcode: new FormControl(''),
    }),
    phone: new FormControl('', Validators.pattern('[01]\\d{9}$')),
    website: new FormControl(
      '',
      Validators.pattern('https?://[a-zA-Z0-9.-]+(?:.[a-zA-Z]{2,})+')
    ),
    company: new FormGroup({
      name: new FormControl('', [Validators.pattern('[a-zA-Z]{5,}')]),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
    }),
  });
  fullname() {
    return this.addUserForm.get('fullname');
  }
  username() {
    return this.addUserForm.get('username');
  }
  email() {
    return this.addUserForm.get('email');
  }
  street() {
    return this.addUserForm.get('address.street');
  }
  suit() {
    return this.addUserForm.get('address.suit');
  }
  city() {
    return this.addUserForm.get('address.city');
  }
  zipcode() {
    return this.addUserForm.get('address.zipcode');
  }
  phone() {
    return this.addUserForm.get('phone');
  }
  website() {
    return this.addUserForm.get('website');
  }
  name() {
    return this.addUserForm.get('company.name');
  }
  catchPhrase() {
    return this.addUserForm.get('company.catchPhrase');
  }
  bs() {
    return this.addUserForm.get('company.bs');
  }

  onSubmit() {
    this.addUser();
  }

  addUser() {
    if (this.addUserForm.valid) {
      const userda: IUser = this.addUserForm.value as IUser;
      this.gService.createData('users', userda).subscribe((data) => {
        console.log('User added successfully', data);
      });
    }
  }
}

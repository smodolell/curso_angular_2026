import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { email, minLength, validate } from '@angular/forms/signals';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.pattern(this.formUtils.namePattern)]],
    email: [null, [Validators.required, Validators.pattern(this.formUtils.emailPattern)]],
    username: [
      null,
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.formUtils.notOnlySpacesPattern),
      ],
    ],
    password: [null, [Validators.required]],
    confirmPassword: [null, Validators.required],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}

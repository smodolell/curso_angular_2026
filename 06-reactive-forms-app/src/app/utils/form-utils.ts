import { FormGroup } from '@angular/forms';

export class FormUtils {
  static isValidField(myForm: FormGroup, fieldName: string): boolean | null {
    return myForm.controls[fieldName].errors && myForm.controls[fieldName].touched;
  }

  static getFieldError(myForm: FormGroup, fieldName: string): string | null {
    if (!myForm.controls[fieldName]) return null;

    const errors = myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
      }
    }
    return null;
  }
}

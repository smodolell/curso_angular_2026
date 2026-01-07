import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
}

export class FormUtils {
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static isValidField(myForm: FormGroup, fieldName: string): boolean | null {
    return myForm.controls[fieldName].errors && myForm.controls[fieldName].touched;
  }
  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
        case 'email':
          return `Correo Electonico no valido`;
        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El correo electronico no es permitido';
          }
          return 'Error de patrón contra expresion regular';

        case 'emailTaken':
          return `El correo electrónico ya está siendo usado por otro usuario`;
        case 'noStrider':
          return `No se puede usar el username de strider en la aplicacion`;

        default:
          return 'Error de Validacion no controlado';
      }
    }

    return null;
  }
  static getFieldError(myForm: FormGroup, fieldName: string): string | null {
    if (!myForm.controls[fieldName]) return null;

    const errors = myForm.controls[fieldName].errors ?? {};

    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return FormUtils.getTextError(errors);
  }

  static isFieldOneEqualFieldTwo(fieldUOne: string, fieldTwo: string) {
    return (formGroup: AbstractControl) => {
      const fieldOneValue = formGroup.get(fieldUOne)?.value;
      const fieldTwoValue = formGroup.get(fieldTwo)?.value;
      return fieldOneValue === fieldTwoValue
        ? null
        : {
            passwordsNotEqual: true,
          };
    };
  }

  static async checkingServerResponce(control: AbstractControl): Promise<ValidationErrors | null> {
    console.log('checkingServerResponce');
    await sleep();
    const formValue = control.value;

    if (formValue === 'hola@mundo.com') {
      return {
        emailTaken: true,
      };
    }
    return null;
  }

  static notStrider(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    return value === 'strider' ? { noStrider: true } : null;
  }
}

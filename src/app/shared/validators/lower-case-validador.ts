import {AbstractControl} from '@angular/forms';

export function lowerCaseValidador(control: AbstractControl) {
  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return {lowercase: true};
  }
  return null;
}

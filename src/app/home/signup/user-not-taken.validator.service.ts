import {Injectable} from '@angular/core';
import {SignupService} from './signup.service';
import {AbstractControl} from '@angular/forms';
import {debounceTime, first, map, switchMap} from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(private sipnUpService: SignupService) {

  }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.sipnUpService.checkUserNameTaken(userName)))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    };
  }
}

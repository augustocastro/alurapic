import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { PlatafornDetectorService } from '../../core/plataform/plataforn-detector.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowerCaseValidador} from '../../shared/validators/lower-case-validador';
import { userNamePassword } from './username-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

  @ViewChild('inputEmail')
  private inputEmail: ElementRef<HTMLInputElement>;

  private signupForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private userNotTakenValidatorService: UserNotTakenValidatorService,
      private signupService: SignupService,
      private router: Router,
      private plataformDetector: PlatafornDetectorService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['', [
          Validators.required,
          // Validators.pattern(/^[a-z0-9_\-]+$/),
          lowerCaseValidador,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40)
        ]
      ]
    }, {
      validator: userNamePassword
    });

    if (this.plataformDetector.isPlatformBrowser()) {
      this.inputEmail.nativeElement.focus();
    }
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser: NewUser = this.signupForm.getRawValue();
      this.signupService.signup(newUser)
        .subscribe(
          response => this.router.navigate(['']),
          (error: Error) => console.log(error));
    } 
  }
}

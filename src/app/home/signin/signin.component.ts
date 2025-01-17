import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {PlatafornDetectorService} from '../../core/plataform/plataforn-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('inputUserName')
  public inputUserName: ElementRef<HTMLInputElement>;
  public formLogin: FormGroup;
  fromUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetector: PlatafornDetectorService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);

    this.formLogin = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.plataformDetector.isPlatformBrowser()) {
      this.inputUserName.nativeElement.focus();
    }
  }

  login() {
    const userName = this.formLogin.get('userName').value;
    const password = this.formLogin.get('password').value;

    this.authService.autheticate(userName, password)
      .subscribe(
        () => {
          this.fromUrl ? this.router.navigateByUrl(this.fromUrl) : this.router.navigate(['user', userName]);
        },
        (error: Error) => {
          console.log(error.message);
          if (this.plataformDetector.isPlatformBrowser()) {
            this.inputUserName.nativeElement.focus();
          }
          this.formLogin.reset();
        }
      );
  }
}

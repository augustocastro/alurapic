import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhotoService} from '../photo/photo.service';
import {Router} from '@angular/router';
import {AlertService} from '../../shared/components/alert/alert.service';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload(): void {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    console.log(description);
    console.log(allowComments);
    console.log(this.file);

    this.photoService
      .uplpad(description, allowComments, this.file)
      .subscribe(() => {
          this.alertService.success('Upload complete', true);
          this.router.navigate(['/user', this.userService.userName]);
        }
      );
  }

  handleFile(file: File): void {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}

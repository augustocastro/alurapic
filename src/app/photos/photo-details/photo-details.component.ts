import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoService} from '../photo/photo.service';
import {Photo} from '../../models/Photo';
import {Observable} from 'rxjs';
import {AlertService} from '../../shared/components/alert/alert.service';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;

  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {
    }, err => {
      console.log(err);
      this.router.navigate(['not-found']);
    });
  }

  remove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['/user', this.userService.userName]);
      }, err => {
        console.log(err);
        this.alertService.danger('Could not delete the photo!', true);
      });
  }

  like(): void {
    this.photoService
      .like(this.photoId)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(this.photoId);
        }
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Photo} from '../../models/Photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  public photos: Photo[];
  public hasMore = true;
  public userName: string;
  public filter = '';
  public currentPage = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  load() {
    this.photoService.listFormUserPagineted(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);

        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }

}

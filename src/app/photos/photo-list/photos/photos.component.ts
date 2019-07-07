import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {Photo} from '../../../models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input()
  public photos: Photo[] = [];
  public rows: Photo[][];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.photos && changes.photos) {
      this.rows = this.groupColuns(this.photos);
    }
  }

  groupColuns(photos: Photo[]) {
    const newRows: Photo[][] = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}

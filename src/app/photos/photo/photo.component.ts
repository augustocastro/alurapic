import {Component, Input} from '@angular/core';
import {environment} from '../../../environments/environment';

const CLOUD = environment.apiUrl + '/imgs/';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {

  public _url: string;

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  @Input()
  public description: string;
}

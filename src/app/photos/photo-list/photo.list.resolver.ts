import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {PhotoService} from '../photo/photo.service';
import {Observable} from 'rxjs';
import {Photo} from '../../models/Photo';

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private photoService: PhotoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.params.userName;
    return this.photoService.listFormUserPagineted(userName, 1);
  }
}

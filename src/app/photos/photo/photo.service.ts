import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../../models/Photo';

@Injectable({providedIn: 'root'})
export class PhotoService {

  private API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  listFormUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.API + `/${userName}/photos`);
  }

  listFormUserPagineted(userName: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(this.API + `/${userName}/photos`, {params});
  }
}

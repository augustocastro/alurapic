import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Photo} from '../../models/Photo';
import {PhotoComment} from '../../models/PhotoComment';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const API = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listFormUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(API + `/${userName}/photos`);
  }

  listFormUserPagineted(userName: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(API + `/${userName}/photos`, {params});
  }

  uplpad(description: string, allowComments, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData, {
      observe: 'events',
      reportProgress: true
    });
  }

  findById(photoId: number): Observable<Photo> {
    return this.http.get<Photo>(API + '/photos/' + photoId);
  }

  getComments(photoId: number): Observable<PhotoComment[]> {
    return this.http.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
  }

  addComment(photoId: number, commentText: string): Observable<any> {
    return this.http.post(API + '/photos/' + photoId + '/comments', {commentText});
  }

  removePhoto(photoId: number): Observable<any> {
    return this.http.delete(API + '/photos/' + photoId);
  }

  like(photoId: number): Observable<boolean> {
    return this.http.post(API + '/photos/' + photoId + '/like', {}, {observe: 'response'})
      .pipe(map(response => true))
      .pipe(catchError(err => err.status === 304 ? of(true) : of(false)));
  }
}

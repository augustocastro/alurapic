import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {User} from './user';
import {BehaviorSubject, Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userName: string;
  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenSerive: TokenService) {
    if (tokenSerive.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string): void {
    this.tokenSerive.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token: string = this.tokenSerive.getToken();
    const user: User = jwt_decode(token) as User;
    this._userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenSerive.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenSerive.hasToken();
  }

  get userName(): string {
    return this._userName;
  }
}

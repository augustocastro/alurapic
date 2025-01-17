import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UserService} from '../user/user.service';
import {environment} from '../../../environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httCliente: HttpClient, private userService: UserService) {
  }

  autheticate(userName: string, password: string) {
    return this.httCliente.post(API + '/user/login', {userName, password}, {observe: 'response'})
      .pipe(tap(response => {
          const authToken = response.headers.get('x-access-token');
          this.userService.setToken(authToken);
          console.log(`User ${userName} authenticated with token ${authToken}`);
        })
      );
  }
}

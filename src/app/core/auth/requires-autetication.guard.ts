import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequiresAuteticationGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.isLogged()) {
      this.router.navigate([''], {  
        queryParams: { fromUrl: state.url } 
      });
      return false;
    }
    return true;
  }
}

import {Directive, ElementRef, OnInit, Renderer} from '@angular/core';
import {UserService} from '../../core/user/user.service';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer,
    private userService: UserService) {
  }

  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
  }
}

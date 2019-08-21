import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';

import {Photo} from '../../../models/Photo';
import {UserService} from '../../../core/user/user.service';

@Directive({
  selector: '[appPhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

  @Input()
  ownedPhoto: Photo;

  constructor(private element: ElementRef, private renderer: Renderer, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if (!user || user.id !== this.ownedPhoto.userId) {
          this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
      });
  }
}

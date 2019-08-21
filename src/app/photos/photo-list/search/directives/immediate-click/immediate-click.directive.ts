import {Directive, ElementRef, OnInit} from '@angular/core';
import {PlatafornDetectorService} from '../../../../../core/plataform/plataforn-detector.service';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(private element: ElementRef<any>, private platafornDetector: PlatafornDetectorService) {
  }

  ngOnInit(): void {
    if (this.platafornDetector.isPlatformBrowser() &&
    this.element.nativeElement.click()) {}
  }
}

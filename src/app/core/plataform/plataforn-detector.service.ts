import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatafornDetectorService {

  constructor(@Inject(PLATFORM_ID) private plataformId: string) {
  }

  isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.plataformId);
  }
}

import { Injectable } from "@angular/core";
import { LoadingService } from "./loading.service";
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
    
    constructor(private loadingService: LoadingService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        return next
            .handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.loadingService.stop();
                    console.log('stop');
                } else {
                    this.loadingService.start();
                    console.log('start');

                }
            }));
    }
}
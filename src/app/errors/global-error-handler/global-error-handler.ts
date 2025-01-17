import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

import * as StackTrace from "stacktrace-js";

import { UserService } from "src/app/core/user/user.service";
import { ServerLogService } from "./server-log-service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    
    constructor(private injector: Injector) {
    }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const message = error.message ? error.message : error.toString();
        const url = location instanceof PathLocationStrategy ? location.path() : '';

        if (environment.production) {
            router.navigate(['/error']);
        }

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(stackFrame => stackFrame.toString())
                    .join('\n');

                console.log(message);
                console.log(stackAsString);

                serverLogService.log(
                    {
                        message, 
                        url, 
                        userName: userService.userName, 
                        stack: stackAsString
                    }
                ).subscribe(
                    () => console.log('Error logged on server'),
                    err => {
                        console.log(err);
                        console.log('Fail to send error log to server');
                    }
                );
            });
    }
}
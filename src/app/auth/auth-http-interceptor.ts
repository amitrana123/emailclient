import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Observable } from "rxjs";
import { tap, filter } from 'rxjs/operators'

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        //console.log(req);
        const modifiedReq = req.clone({
            withCredentials: true
        })
        return next.handle(modifiedReq);
        // return next.handle(modifiedReq).pipe(
        //     filter(val => val.type === HttpEventType.Sent),
        //     tap(val => {
        //         console.log('Sent the request');
        //         // if (val.type === HttpEventType.Sent) {
        //         //     console.log('Request was sent to server');
        //         // }

        //         // if (val.type === HttpEventType.Response) {
        //         //     console.log('Got a response form the API', val);
        //         // }
        //     })
        // )
    }
}

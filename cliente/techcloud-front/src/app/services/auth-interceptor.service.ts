import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpInterceptor} from '@angular/common/http';
import { LoginService } from './login.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  constructor(
    private loginService: LoginService,
    private router: Router


  ) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
         
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `${this.loginService.getToken()}`
        
        
      }
      
    })
    return next.handle(tokenizeReq).pipe(
        catchError((err: HttpErrorResponse) => {
  
          if (err.status === 403 || err.status === 401) {
                   
            this.router.navigateByUrl('/home');
          }
          return throwError( err );
  
        })
      );

  }

}


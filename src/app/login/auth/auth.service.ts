import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Login } from '../login';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiURL = "https://3kniis.sse.codesandbox.io";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
    
  authenticate(login:Login): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/auth/login', JSON.stringify(login), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
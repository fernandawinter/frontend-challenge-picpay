import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Payment } from './payment';
  
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  private apiURL = "https://3kniis.sse.codesandbox.io";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBpY3BheS13ZWIiLCJzdWIiOiI2MmI0YTk4MGVkYTY5ODVjNTNiN2ExY2UiLCJpYXQiOjE2ODIyODc2OTQsImV4cCI6MTY4MjM3NDA5NH0.jCnAa8A_Dx_x0ErrV7LDUjgmSy-5lT7WI-_e0oRifgo'
    })
  }
   
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    

    return this.httpClient.get(this.apiURL + '/payments')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(payment:Payment): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/payments', JSON.stringify(payment), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/payments/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, payment:Payment): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/payments/' + id, JSON.stringify(payment), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/payments/' + id, this.httpOptions)
  
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
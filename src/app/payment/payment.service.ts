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
    
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBpY3BheS13ZWIiLCJzdWIiOiI2MmI0YTk4MGVkYTY5ODVjNTNiN2ExY2UiLCJpYXQiOjE2ODIyODc2OTQsImV4cCI6MTY4MjM3NDA5NH0.jCnAa8A_Dx_x0ErrV7LDUjgmSy-5lT7WI-_e0oRifgo'
    })
  }
   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
    

    return this.httpClient.get(this.apiURL + '/payments')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(payment:Payment): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/payments', JSON.stringify(payment), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/payments/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, payment:Payment): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/payments/' + id, JSON.stringify(payment), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/payments/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
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
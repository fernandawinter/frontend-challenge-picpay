import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Payment } from './payment';
  
const getAccessToken = () => {
  const token = localStorage.getItem('access_token');
  console.log('token', token);
  return token;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  private apiURL = "https://3kniis.sse.codesandbox.io";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAccessToken()
    })
  }
   
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    

    return this.httpClient.get(this.apiURL + '/payments', this.httpOptions)
  
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
  
    return this.httpClient.get(this.apiURL + '/payments/' + id, this.httpOptions)
  
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
    console.log('error', error);
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
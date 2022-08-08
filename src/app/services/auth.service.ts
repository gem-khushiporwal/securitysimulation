import { HttpClient } from '@angular/common/http';
import { BoundElementProperty } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { isTemplateLiteral } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  notificationBoolean: boolean = false;
  mail = new BehaviorSubject<any>(null);
  constructor(private http:HttpClient,private router:Router) {
    
   }
  checkLogin(){
    if(localStorage.getItem('token')){
          return true;
    }
    return false;
  }
  logout(){
    localStorage.clear();
    this.router.navigate(["/main/login"]);

  }

  getEmployeeDetailBehaviorSubject(): Observable<any> {

    return this.mail.asObservable();
  }
  setNotificationModalBoolean(value: boolean) {
    this.notificationBoolean = value;
  }
  getNotificationModalBoolean(){
    return this.notificationBoolean
  }
  loginMethod(creds: string, token:string): Observable<any>{
    const obj={
      'email' :creds
    }
    return this.http.post<any>('login', creds);
   }
  setToken( email?: any,backend_token?:any) {
    return new Promise<void>((resolve, reject) => {
      localStorage.setItem('email',email);   
      this.loginMethod(email,backend_token).subscribe((item: any)=> {
      if (item)
      {
        localStorage.setItem('Manager',(item.data.isManager));
        localStorage.setItem('token',(item.message));
        resolve();   
      }
      else{
        reject();
      }
  
    });
  })
   }

  }


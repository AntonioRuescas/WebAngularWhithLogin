import { environment } from './../../environments/environment';
import { LoginModel } from './../model/login.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import  {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import { Router } from '@angular/router';

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginModelBehaviorSubject: BehaviorSubject<LoginModel | null>;
  public login: Observable<LoginModel | null>; // ¿/hay alguien logado o no??
  static login: any;

  constructor(private http: HttpClient, private route: Router) { 
    this.loginModelBehaviorSubject = new BehaviorSubject<LoginModel | null>(JSON.parse(<string>localStorage?.getItem(LOGIN_KEY)));
    this.login = this.loginModelBehaviorSubject.asObservable();
  }

  performLogin(entrada: LoginModel): Observable<LoginModel>{
    console.log('performLogin(' + JSON.stringify(entrada)+')');
    return this
    .http
    .post<LoginModel>(environment.login, entrada)
    .pipe(map(retornoAPI => {

      console.log('Login OK: ' + JSON.stringify(retornoAPI));
      this.loginModelBehaviorSubject.next(retornoAPI);
      localStorage.setItem(LOGIN_KEY, JSON.stringify(retornoAPI));
      return retornoAPI;
    }));
  }

  performLogout(): void{
    localStorage.removeItem(LOGIN_KEY);
    this.loginModelBehaviorSubject.next(null);
    this.route.navigate(['/login']);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../model/Usuario';

interface AuthResposeData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  usuario = new BehaviorSubject<Usuario>(new Usuario('', '', '', new Date()));
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {
   return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoPvxOm6gc34ED6EQEi6p0p87RLn2hyZw', 
   {
      email: email,
      password: password,
      returnSecureToken: true
   }).pipe(
      tap(resData => {
        const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const usuario = new Usuario(
          resData.email,
          resData.localId,
          resData.idToken,
          expiracaoData
        );

        this.usuario.next(usuario);
        this.loggedIn.next(true);
        localStorage.setItem('userData', JSON.stringify(usuario));
      })
   );
  }

  loginUser(email: string, password: string) {
    return this.http.post<AuthResposeData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoPvxOm6gc34ED6EQEi6p0p87RLn2hyZw',
    {
      email: email,
      password: password,
      returnSecureToken: true
   }).pipe(
    tap(resData => {
      const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const usuario = new Usuario(
          resData.email,
          resData.localId,
          resData.idToken,
          expiracaoData
        );
        this.usuario.next(usuario);
        this.loggedIn.next(true);
        localStorage.setItem('userData', JSON.stringify(usuario));
    }),
   );
  }

  autoLogin() {
    const userData :{
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    
    } = JSON.parse(localStorage.getItem('userData') as string);
    if(!userData) {
      return;
    }

    const loadedUser = new Usuario(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.usuario.next(loadedUser);
      this.loggedIn.next(true);
    }

  }

  logout() {
    this.loggedIn.next(false); 
    this.usuario.next(new Usuario('', '', '', new Date()));
  }

  isLogged(): boolean {
    return this.usuario.value.token != null;
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './modules/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suinocultura';
  logged: boolean =  false;
  logInSubscribtion: Subscription;

  constructor(private router: Router, private authService: AuthService){
    this.logInSubscribtion = this.authService.loggedIn.subscribe({
      next: (value: boolean) => {
        this.logged = value;
        console.log('logged: ', this.logged);
      }
      }
    )
  }

  ngOnInit(){
    this.logged = this.authService.isLogged();
  }

  onLogin(event: string){
    this.router.navigate(['/login']);
  }

  onLogout(event: string){
    this.authService.logout();
    this.logged = false;
    this.router.navigate(['/login']);
  }

  onSignUp(event: string){
    this.router.navigate(['/signup']);
  }
}

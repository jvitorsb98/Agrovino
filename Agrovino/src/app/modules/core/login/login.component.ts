import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logginIn = false;

  form: FormGroup;
  editMode = false;
  appointmentId = '';

  @Output() auth = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { 
    this.form = new FormGroup({
      'name': new FormControl(null, [this.signUpMode.bind(this), Validators.maxLength(100)]),
      'email': new FormControl(null, [this.signUpMode.bind(this), Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'confirmPassword': new FormControl(null, [this.signUpMode.bind(this), this.equalPasswords.bind(this), Validators.minLength(6), Validators.maxLength(20)]),
    });
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      {
        next: (url) => {
          this.logginIn = url[0].path === 'login';
        }
      }
    );
  }

  signUpMode(control: AbstractControl): {[key:string]: boolean} | null{
    const value = control.value;

    if (!this.logginIn && !value){
      return {'required': true};
    }
    return null;
  }

  equalPasswords(control: AbstractControl): {[key:string]: boolean} | null{
    const confirmPassword = control.value;
    const password = control.root.get('password')?.value

    if (password !== confirmPassword){
      return {'notEqual': true};
    }
    return null;
  }

  

  onSubmit() {
    if(this.form.valid){
      const email = this.form.value.email;
      const password = this.form.value.password;

      if(this.logginIn){
        this.authService.loginUser(email, password).subscribe(
          responseData => {
            this.router.navigate(['/home']);
          }
        );
      } else {
        this.authService.signupUser(email, password).subscribe(
          {
            next: (responseData) => {
              this.router.navigate(['/home']);
            },
            error: (error) => {
              console.log(error);
              switch(error.error.error.message){
                case 'EMAIL_EXISTS':
                  alert('E-mail já cadastrado.');
                  break;
                default:
                  alert('Ocorreu um erro ao cadastrar o usuário.');
                  break;
              
              }
            }
            
          }
        );
      }

      this.form.reset();
    }



  }

}

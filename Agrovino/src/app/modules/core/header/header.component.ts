import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isLogged: boolean = false;
  @Output() login = new EventEmitter<string>();
  @Output() logout = new EventEmitter<string>();
  @Output() signup = new EventEmitter<string>();

  emitLogout(){
    this.logout.emit('logout');
  }

  emitLogin(){
    this.login.emit('login');
  }

  emitSignUp(){
    this.signup.emit('signup');
  }

  closeDropdown(event: MouseEvent): void {
    event.stopPropagation();
  }
}

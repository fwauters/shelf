import { Component } from '@angular/core';
import { DialogService } from '@shelf-front/dialogs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  userIsLogged: string | null = sessionStorage.getItem('shelf-isLogged');

  constructor(private dialogService: DialogService) { }

  test() {
    console.log('test');
  }

  logOff() {
    sessionStorage.removeItem('shelf-isLogged');
    window.location.replace('/');
  }

  openDialog(type: string) {
    switch (type) {
      case 'register': this.dialogService.openRegisterDialog();
        break;
      case 'login': this.dialogService.openLoginDialog();
        break;
      default: console.error('Dialog error: no type provided');
        break;
    }
  }

}

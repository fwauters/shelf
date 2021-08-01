import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { AddCollectionDialogComponent } from './components/add-collection-dialog/add-collection-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  defaultOptions = {
    width: '',
    height: '',
    maxWidth: '90%',
    maxHeight: '80%',
    panelClass: '',
    data: {},
  };

  openRegisterDialog() {
    let dialogRef: MatDialogRef<RegisterDialogComponent>;
    let options = this.defaultOptions;
    dialogRef = this.dialog.open(RegisterDialogComponent, options);
    return dialogRef.afterClosed();
  }

  openLoginDialog() {
    let dialogRef: MatDialogRef<LoginDialogComponent>;
    let options = this.defaultOptions;
    dialogRef = this.dialog.open(LoginDialogComponent, options);
    return dialogRef.afterClosed();
  }

  openAddCollectionDialog() {
    let dialogRef: MatDialogRef<AddCollectionDialogComponent>;
    let options = this.defaultOptions;
    dialogRef = this.dialog.open(AddCollectionDialogComponent, options);
    return dialogRef.afterClosed();
  }

  /* openNotificationDialog(title: string, text: string) {
    let dialogRef: MatDialogRef<NotificationDialogComponent>;
    let options = this.defaultOptions;
    options.data = { title, text };
    dialogRef = this.dialog.open(NotificationDialogComponent, options);
    return dialogRef.afterClosed();
  } */
}

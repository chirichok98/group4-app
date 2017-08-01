import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {
  constructor(public snackBar: MdSnackBar) { }

  showSnack(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
}

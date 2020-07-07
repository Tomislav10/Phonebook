import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog: any[] = [];

  constructor() {
  }

  add(dialog: any) {
    this.dialog.push(dialog);
  }

  remove(id: string) {
    this.dialog = this.dialog.filter(x => x.id !== id);
  }

  open(id: string) {
    const dialog: any = this.dialog.filter(x => x.id === id)[0];
    dialog.open();
  }

  close(id: string) {
    const dialog: any = this.dialog.filter(x => x.id === id)[0];
    dialog.close();
  }
}

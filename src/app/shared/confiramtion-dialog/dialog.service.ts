import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog: any[] = [];

  constructor() {
  }

  public add(dialog: any): void {
    this.dialog.push(dialog);
  }

  public remove(id: string): void {
    this.dialog = this.dialog.filter(x => x.id !== id);
  }

  public open(id: string): void {
    const dialog: any = this.dialog.filter(x => x.id === id)[0];
    dialog.open();
  }

  public close(id: string): void {
    const dialog: any = this.dialog.filter(x => x.id === id)[0];
    dialog.close();
  }
}

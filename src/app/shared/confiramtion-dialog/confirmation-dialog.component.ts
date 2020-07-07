import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {DialogService} from './dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.dialogService.add(this);
  }
  ngOnDestroy(): void {
    this.dialogService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('dialog-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-open');
  }

  confirm(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-open');
  }

}

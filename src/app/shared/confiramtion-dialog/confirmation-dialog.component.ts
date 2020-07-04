import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DialogService} from './dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Output() confirmDelete: EventEmitter<boolean> = new EventEmitter();
  private element: any;

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  public ngOnInit(): void {
    this.dialogService.add(this);
  }
  public ngOnDestroy(): void {
    this.dialogService.remove(this.id);
    this.element.remove();
  }

  public open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('dialog-open');
  }

  public close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-open');
  }

  public confirm(): void {
    this.confirmDelete.emit(true);
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-open');
  }

}

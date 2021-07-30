import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-can-save',
  templateUrl: './can-save.component.html',
  styleUrls: ['./can-save.component.css']
})
export class CanSaveComponent implements OnInit {

  @Input() canSave: boolean = false;
  @Output() canSaveChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeCanSave() {
    this.canSave = !this.canSave;
    this.canSaveChange.emit(this.canSave);
  }

}

import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-input-btn',
  templateUrl: './input-btn.component.html',
  styleUrls: ['./input-btn.component.scss']
})
export class InputBtnComponent {
@Output()   name= new EventEmitter<string>();
  
  data: string = "";
  
addNewItem(value: string) {
    this.name.emit(value);
  }

 }


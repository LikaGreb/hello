import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
 text: string = "Доброго дня, незнайомець. Давай знайомитись?";
  
 addItem(newItem: string) {
   
   if (newItem == "") {
     this.text = "Нажаль, я не почув тебе";
    }
    else  this.text = "Привіт, " +newItem+"! Радий познайомитись";
  }
  
}


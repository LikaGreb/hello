import { Component, Output } from '@angular/core';
import { HelloService } from 'src/app/hello.service';


@Component({
  selector: 'app-input-btn',
  templateUrl: './input-btn.component.html',
  styleUrls: ['./input-btn.component.scss']
})
export class InputBtnComponent {
  name: string = "";
   text: string = "";
   public data: string = "";


  addName(inpName: string) {
    this.name = inpName;
    if (inpName == "") {
     this.text = "Нажаль, я не почув тебе";
    }
    else  this.text = "Привіт," +this.name+"! Радий познайомитись";
    
    console.log(inpName);
    this.data = this.text;
    console.log(this.data);
    return this.data;
  }
 
  
   constructor(private helloService: HelloService ) {
  this.helloService.myMethod(this.data);
  console.log(this.data);
    }
}

// export class SomeComponent {
//     public text: Array<any> = MyData;

//     public constructor(private HelloService: HelloService) {
//         this.HelloService.myMethod(this.text);
//     }
// }
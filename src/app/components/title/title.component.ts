import { Component, Input } from '@angular/core';
import { HelloService } from 'src/app/hello.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  public text: string = "";
  public constructor(private helloService: HelloService ) {
        this.helloService.myMethod$.subscribe((data:string) => {
          this.text = data;
                console.log(data) // И тут тоже мы можем пользоваться нашими данными!
            }
        );
    }
  
}

// export class SomeComponent2 {
//     public text: Array<any> = MyData;

//     public constructor(private helloService: HelloService) {
//         this.helloService.myMethod$.subscribe((text) => {
//                 this.text = text; // И тут тоже мы можем пользоваться нашими данными!
//             }
//         );
//     }
// }
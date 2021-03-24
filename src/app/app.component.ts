import { Component } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText : string=lorem.sentence();
  inputText='';

  onChangeInput(value:string){
    this.inputText = value;
  }
  compare(letterRandom:string,letterEnter:string) : string{
    if (!letterEnter) {
      return 'pending';
    }
    return letterEnter === letterRandom ? 'correct' : 'incorrect';
  }
}

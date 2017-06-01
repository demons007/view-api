import { Component, OnInit } from '@angular/core';
import { AllahComponent } from './allah.component';
import { JesusComponent } from './jesus.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><al [mapper]="mp"></al><jesus></jesus>`,
})
export class AppComponent implements OnInit { name = 'Angular';
mp=["ajay","kumar","jha"];
ngOnInit(){
	console.log("ng init")
 }
}

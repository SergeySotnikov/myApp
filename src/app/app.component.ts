import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  list:number[]=[];

  printItem(){
    this.list =[];
    for(let i=1; i<=5;i++){
      this.list.push(i);
    }
  }
}  
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  users = [
    {
    firstName: 'Sergey',
    lastName: 'Sotnikov',
    age: 30,
    },
    {
    firstName: 'Ivan',
    lastName: 'Petrovich',
    age: 24,
    },
    {
    firstName: 'Anton',
    lastName: 'Ivanov',
    age: 27,
    }
    ];
    
}  
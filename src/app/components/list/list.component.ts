import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() userList:any;

  delete(){
    this.userList.shift();
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}

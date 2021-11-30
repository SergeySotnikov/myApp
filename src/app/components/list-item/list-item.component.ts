import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {

  @Input() user:any;
  @Input() index:any;


  constructor() { }

  ngOnInit(): void {
  }

}

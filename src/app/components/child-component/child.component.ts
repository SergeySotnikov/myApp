import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  @Input() currentData:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}

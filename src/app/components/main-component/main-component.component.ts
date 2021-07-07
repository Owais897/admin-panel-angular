import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
})
export class MainComponentComponent implements OnInit {
  @Input() dataSource: any;
  constructor() {}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  ngOnInit(): void {}
}

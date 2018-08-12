import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {
  @ViewChild('profile') myIdentifier: ElementRef;
  rangeHeight: number;
  constructor() {
  }

  ngOnInit() {
  }
}

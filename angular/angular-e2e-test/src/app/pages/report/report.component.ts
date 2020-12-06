import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

}

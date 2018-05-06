import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  people: any[] = [
    {
      name: 'Rabin Naga'
    },
    {
      name: 'Rowan Siwakoti'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

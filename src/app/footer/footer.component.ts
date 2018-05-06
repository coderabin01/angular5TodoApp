import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  name: string;

  people = [
    {
      name: 'Rabin Naga'
    },
    {
      name: 'Sabin Naga'
    }]

  constructor() {
  }

  ngOnInit() {
  }

  addPerson(name: string){
    if(name){
      this.people.push({'name': name});
      this.name = '';
    }
  }
}

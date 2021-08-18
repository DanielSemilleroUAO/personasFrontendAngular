import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person/person';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
  
  message: string = '';
  persons: Person[] = [];

  constructor() { }

  ngOnInit() {
  }

}

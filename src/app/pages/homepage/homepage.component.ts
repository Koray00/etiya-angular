import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etiya-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  today: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

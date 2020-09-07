import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Samland';

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropdown = false;
  constructor() { }

  ngOnInit() {
  }
  showMenu() {
    this.dropdown = true;
  }
  hideMenu() {
    this.dropdown = false;
  }
}

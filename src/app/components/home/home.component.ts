import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name = 'Gabriel Luis P. Sabater'
  about = "I am a 3rd year student taking BSIT-MWA. I was supposedly a 4th year student, but the 4th year subjects were in conflict with my 3rd year subjects."
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-roundpick',
  templateUrl: './roundpick.component.html',
  styles: [
  ]
})
export class RoundpickComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

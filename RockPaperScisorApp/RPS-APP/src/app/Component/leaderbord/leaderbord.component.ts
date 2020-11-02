import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderbord',
  templateUrl: './leaderbord.component.html',
  styles: [
  ]
})
export class LeaderbordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

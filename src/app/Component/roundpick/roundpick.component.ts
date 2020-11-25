import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { DisplaymenuService } from 'src/app/Service/displaymenu.service';

@Component({
  selector: 'app-roundpick',
  templateUrl: './roundpick.component.html',
  styleUrls: ['./roundpick.component.css'
  ]
})
export class RoundpickComponent implements OnInit {

  constructor(private router: Router, public displaymenu : DisplaymenuService) { }

  ngOnInit(): void {
  }

  trunchoix(choixoption: 1|2|3){
    this.displaymenu.trunNumbre(choixoption);
  }
}

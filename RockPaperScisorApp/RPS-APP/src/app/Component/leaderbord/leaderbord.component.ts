import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Service/app.service';
import { DisplaymenuService } from '../../Service/displaymenu.service';

@Component({
  selector: 'app-leaderbord',
  templateUrl: './leaderbord.component.html',
  styleUrls: ['./leaderbord.component.css']
})
export class LeaderbordComponent implements OnInit {

  constructor(private router: Router,public displaymenu : DisplaymenuService, private appservice : AppService) { }

  ngOnInit(): void {}


  // calculeProc(){

  // }
}

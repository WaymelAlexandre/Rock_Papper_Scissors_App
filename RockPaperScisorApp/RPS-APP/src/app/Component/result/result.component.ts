import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from 'src/app/Service/app.service';
import { DisplaymenuService } from 'src/app/Service/displaymenu.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'] })
export class ResultComponent implements OnInit {

  constructor(private router: Router, public displaymenu : DisplaymenuService, private appservice : AppService) { }

  ngOnInit(): void {
  }
  backselect(action:"backselect")
  {
    this.appservice._backselect(action)
  }

}

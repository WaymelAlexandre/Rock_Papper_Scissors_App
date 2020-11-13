
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GameResult } from 'src/app/modules/GameResult';
import { InfoPlayer } from 'src/app/Modules/InfoPlayer';
import { AppService } from '../../Service/app.service';
import { DisplaymenuService } from '../../Service/displaymenu.service';
import { TitleComponent } from '../title/title.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router: Router, private AppServices: AppService, public displaymenu : DisplaymenuService) { }

  ngOnInit(): void {
  }

  public RockPick: boolean = false ;
  public PaperPick: boolean = false ;
  public ScissorsPick: boolean = false ;
  public checkifname: string ;

  colordisplay(option){
    if (option == "Rock"){
      return this.RockPick = true,  this.PaperPick = false, this.ScissorsPick = false}
    if (option == "Paper")
      { return this.RockPick = false, this.PaperPick = true, this.ScissorsPick = false}
    if (option == "Scissors")
      { return this.RockPick = false, this.PaperPick = false, this.ScissorsPick = true}
  }
///to fix
  validationUser(){
    if (this.RockPick)
      {this.displaymenu.playerselect({ playerChoice: "Rock"  } as GameResult) ;}
    if (this.PaperPick)
      {this.displaymenu.playerselect({ playerChoice: "Paper" } as GameResult);}
    if (this.ScissorsPick)
      {this.displaymenu.playerselect({ playerChoice: "Scissors"} as GameResult);}


  }

  onEnter(action: string ) {
      this.displaymenu.username(action);
  }




}

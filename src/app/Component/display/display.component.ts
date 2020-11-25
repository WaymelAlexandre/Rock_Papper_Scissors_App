
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


import { playinfo } from 'src/app/Modules/playinfo';
import { AppService } from '../../Service/app.service';
import { DisplaymenuService } from '../../Service/displaymenu.service';


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


  colordisplay(option: "Rock" | "Paper" | "Scissors"){
    if (option == "Rock"){
      return this.RockPick = true,  this.PaperPick = false, this.ScissorsPick = false}
    if (option == "Paper")
      { return this.RockPick = false, this.PaperPick = true, this.ScissorsPick = false}
    if (option == "Scissors")
      { return this.RockPick = false, this.PaperPick = false, this.ScissorsPick = true}

    this.displaymenu.validechoix(option);
  }


  validationUser(name: playinfo ) {
      this.displaymenu.playerselect(name);
  }

  onEnter(action: string ){
    this.displaymenu.username(action)
  }




  ///to fix
  // validationUser(){
  //   if (this.RockPick)
  //     {this.displaymenu.playerselect({ playerChoice: "Rock"  } as playinfo) ;}
  //   if (this.PaperPick)
  //     {this.displaymenu.playerselect({ playerChoice: "Paper" } as playinfo);}
  //   if (this.ScissorsPick)
  //     {this.displaymenu.playerselect({ playerChoice: "Scissors"} as playinfo);}


  // }


}

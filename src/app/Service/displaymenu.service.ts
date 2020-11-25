import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//modules

import { Observable } from 'rxjs';

import { Action } from 'rxjs/internal/scheduler/Action';
import { playinfo, TurnResult } from '../Modules/playinfo';
import { leader, StatistiquePlayer } from '../Modules/leaderbord';
import { Game } from '../Modules/Game';

@Injectable({
  providedIn: 'root'
})
export class DisplaymenuService {

  constructor(private client: HttpClient, private router: Router) { }


  public _playerSelection?: string;
  public  _computerNum ?: string;
  public  _result ?: string;
  private _username : string ;
  private _userCheck : boolean = false;
  private _numbreOfTrun: Number;

  public get name() : string {
    return this._username
  }

  //leaderbord
  public leaderview : StatistiquePlayer[] = [];

  validechoix(option?: "Rock" | "Paper" | "Scissors" ){
    this._playerSelection = option;
  }
  trunNumbre(option?: 1|2|3){
    this._numbreOfTrun = option;
  }
  //need to check this
  senttrunNumbre(trunNumbre: Game){
    this.client.post<Game>("http://localhost:5000/RPS_API/nombredetour", trunNumbre) //allow to play thenumbre of trun choosed 1/3/5 in the game Api still working on it.
    .subscribe(rep => {
      this._numbreOfTrun = rep.numbreofturn;
      this.router.navigateByUrl("/display")
    })

  }

  playerselect(name: playinfo ){

    this.client.post<TurnResult>("http://localhost:5000/RPS_API/resulttrun", {userName: name, playerChoice: this._playerSelection} )
    .subscribe(reponce =>{
      if (this._userCheck == false ) {
        alert("you need a nick name ")
          return
      }
      this._username = reponce.userName;
      this._playerSelection = reponce.playerChoice;
      this._computerNum = reponce.CpuChoice;
      this._result = reponce.result;

    } )
    this.router.navigateByUrl("/result")

  }

  Leaderbord(){

    this.client.get<leader>("http://localhost:5000/RPS_API/lead")
    .subscribe(reponce => {
      this.leaderview = reponce.leaderview;  //api send 3 best player
    })
    this.router.navigateByUrl("/leaderbord")
  }



  username(action: string ){
    this._userCheck = true;
    this._username = action;
  }
}

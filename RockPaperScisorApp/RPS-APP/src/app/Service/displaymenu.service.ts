import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//modules

import { Observable } from 'rxjs';

import { Action } from 'rxjs/internal/scheduler/Action';
import { playinfo, TurnResult } from '../Modules/playinfo';
import { leader, StatistiquePlayer } from '../Modules/leaderbord';

@Injectable({
  providedIn: 'root'
})
export class DisplaymenuService {

  constructor(private client: HttpClient, private router: Router) { }


  public _playerSelection?: string;
  public  _computerNum ?: string;
  public  _result ?: string;
  public _username : string ;
  public _userCheck : boolean = false;


  //leaderbord
  public leaderview : StatistiquePlayer[] = [];

  validechoix(option?: "Rock" | "Paper" | "Scissors" ){
    this._playerSelection = option;
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



  // playerselect(pick : playinfo){
  //   this.client.post<TurnResult>("http://localhost:5000/RPS_API/resulttrun", pick)


  //     .subscribe((Response) => {
  //       if (this._userCheck == false ) {
  //         alert("you need a nick name ")
  //         return
  //       }
  //       this._playerSelection = Response.playerChoice;
  //       this._computerNum = Response.CpuChoice;
  //       this.router.navigateByUrl("/result")
  //     })
  //   }


  //   username(action: string ){
  //     this._userCheck = true;
  //     this._username = action;
  //   }



  // playerselect(pick : GameResult){
  //   this.client.post<GameResult>(this.localUrlSub, pick)


  //     .subscribe((Response) => {
  //       if (this._userCheck == false ) {
  //         alert("you need a nick name ")
  //         return
  //       }
  //       this._username = Response.userName;
  //       this._playerSelection = Response.playerChoice;
  //       this._computerNum = Response.cpuChoice;
  //       this._result = Response.result;
  //       this.router.navigateByUrl("/result")
  //     })
  //   }
  //   username(action: string ){
  //     this._userCheck = true;
  //     this._username = action;
  //   }



    // username(){
    //   let request = this.client.get(this.localUrl);
    //   request.subscribe((response) => {


    //   })
    // }


    //}



    // username(username: HTMLInputElement ){
    //   let post = {title: username.value};

    //   this.client.post<PlayerNameModel>(this.localUrl, JSON.stringify(post))
    //   .subscribe((response) => {
    //     post.id= response.json().id;
    //     console.log(response.userName)
    //    })

    // }

    // leaderbord(value: string)
    // {
    //   this.client.post(this.localUrl, value)
    // }


}

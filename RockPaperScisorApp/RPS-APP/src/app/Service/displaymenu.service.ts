import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//modules
import { GameResult } from "../modules/GameResult"
import { PlayerRequestModel } from "../modules/PlayerRequestModel"

@Injectable({
  providedIn: 'root'
})
export class DisplaymenuService {

  constructor(private client: HttpClient, private router: Router) { }


  _playerSelection ?: string;
  _computerNum ?: string;
  _result ?: string;
  _username : string ;
  _userCheck : boolean = false;
  private localUrl = "https://localhost:5001/api/Selection/submit";



  //sent
  playerselect(pick : PlayerRequestModel){
    this.client.post<GameResult>(this.localUrl, pick)
      .subscribe((Response) => {
        if (this._userCheck == false ) {
          alert("you need a nick name ")
          return

        }
        this._username = Response.playerName
        this._playerSelection = Response.playerChoice;
        this._computerNum = Response.cpuChoice;
        this._result = Response.result;
        this.router.navigateByUrl("/result")
      })
    }

    username(action: string ){
      this._userCheck = true;
      this._username = action;

    }


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

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//modules
import { GameResult } from "../modules/GameResult"
import { InfoPlayer } from "../Modules/InfoPlayer"
import { Observable } from 'rxjs';
import { LeaderBord } from '../Modules/leaderBord';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class DisplaymenuService {

  constructor(private client: HttpClient, private router: Router) { }


  public _playerSelection ?: string;
  public  _computerNum ?: string;
  public  _result ?: string;
  public _username : string ;
  private _userCheck : boolean = false;
  private localUrlSub = "https://localhost:5001/api/Selection/submit";
  private localUrllead = "https://localhost:5001/api/Selection/leader";



  //sent
  playerselect(pick : GameResult){
    this.client.post<GameResult>(this.localUrlSub, pick)


      .subscribe((Response) => {
        if (this._userCheck == false ) {
          alert("you need a nick name ")
          return
        }
        this._username = Response.userName;
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

    getListPlayer(): Observable<LeaderBord[]>{
      return this.client.get<LeaderBord[]>(this.localUrllead);
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

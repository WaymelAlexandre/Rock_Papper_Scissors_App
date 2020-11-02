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


  playerSelection ?: string
  computerNum ?: string
  result ?: string

  //sent 
  playerselect(pick : PlayerRequestModel){
    this.client.post<GameResult>("https://localhost:5001/api/Selection/submit", pick)
      .subscribe(Response => {
        this.playerSelection = Response.playerChoice;
        this.computerNum = Response.cpuChoice;
        this.result = Response.result;
        this.router.navigateByUrl("/display")
      })
    }
}

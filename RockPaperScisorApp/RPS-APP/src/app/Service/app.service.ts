import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private client: HttpClient, private router: Router) { }

  _backselect(action:"backselect")
  {
    this.router.navigateByUrl("/display")
  }

}

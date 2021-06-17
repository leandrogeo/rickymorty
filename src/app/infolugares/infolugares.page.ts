import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-infolugares',
  templateUrl: './infolugares.page.html',
  styleUrls: ['./infolugares.page.scss'],
})
export class InfolugaresPage implements OnInit {
  perfilinfo:string;
  character;
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.perfilinfo=this.activateRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/location/'+ this.perfilinfo)
    .subscribe(res=>{
      this.character=res;
    }) 
  }

}

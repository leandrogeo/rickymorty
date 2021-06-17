import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilinfo:string;
  character;
 
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.perfilinfo=this.activateRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/'+ this.perfilinfo)
    .subscribe(res=>{
      this.character=res;
    }) 
  }

}

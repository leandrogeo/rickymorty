import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-listadeusuarios',
  templateUrl: './listadeusuarios.page.html',
  styleUrls: ['./listadeusuarios.page.scss'],
})
export class ListadeusuariosPage implements OnInit {

  characters =[]
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res);
      this.characters=res.results;
    })
  }

}

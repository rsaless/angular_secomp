import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Planeta } from "../planeta/planeta";

@Component({
  selector: 'solar-galaxia',
  templateUrl: './galaxia.component.html',
  styleUrls: ['./galaxia.component.css']
})
export class GalaxiaComponent implements OnInit {

  
  listaPlanetas: Planeta[] = [];

  constructor(conexaoApi: HttpClient){
    conexaoApi.get<Planeta[]>('http://localhost:3000/v2/dados').subscribe(dadosApi => {
      this.listaPlanetas = dadosApi;
    });
  }

  ngOnInit() {
  }

}

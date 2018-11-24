import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
//import { HttpClient } from '@angular/common/http' Ejemplo paises


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  //paises: any[];
  releases: any[];

  constructor(private spotify:SpotifyService) {
    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
      console.log(data);
      this.releases = data;
    });
  }

  /*
  constructor(private Http : HttpClient) { 
    this.Http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (data:any) => { 
      this.paises = data;
      
    })
  }
  */

}

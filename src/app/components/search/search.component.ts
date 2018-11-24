import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists : any[];

  constructor(public spotify:SpotifyService) {

   }

  search(query : string){
    console.log(query);

    this.spotify.getArtist(query)
    .subscribe( (data:any) => {  
      console.log(data);
      this.artists = data;
    });
  }

}

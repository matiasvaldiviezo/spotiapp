import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public Http:HttpClient) {
    console.log('Spotify service ready');
   }

   getQuery( apiquery:string ){
      const url = `https://api.spotify.com/v1/${ apiquery }`;
      const headers = new HttpHeaders({
        'Authorization':'Bearer BQC_HsCOR9vC1NC7vkwPoCKHIAF1DrTuleTGYZkHkn4hmds7U3zUkaSEA0zOgul-Ax_Q49MlFwSn7OvecOc'
      });
      return this.Http.get(url,{headers});
   }

   getNewReleases(){

     return this.getQuery('browse/new-releases?country=AR').pipe( map( data => data['albums'].items ));

   }

   getArtist(query:string){

      return this.getQuery(`search?q=${query}&type=artist&limit=20`).pipe( map( data => data['artists'].items ));
      
   }

}
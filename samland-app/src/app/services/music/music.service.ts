import { Injectable } from '@angular/core';
// @ts-ignore
import artistsJson from '../../../assets/artist.json';
import { Artist } from '../../models/artist';
import { Observable, Observer } from 'rxjs';
import { Album } from '../../models/album';
import { HttpClient } from '@angular/common/http';

interface Setting {
  SL_MUSIC_API_HOST: string;
}

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  musicServiceUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
    // this.getAPIHost().then((data: string) => {
    //   this.musicServiceUrl = 'http://' + data + ':8080';
    //   console.log(this.musicServiceUrl);
    // });
  }

  getArtists(): Observable<Artist[]> {
    const url = this.musicServiceUrl + '/api/artist';
    console.log('Get: ' + url);
    return this.httpClient.get<Artist[]>(url);
  }

  getArtist(id: number): Observable<Artist> {
    const url = this.musicServiceUrl + '/api/artist/' + id.toString();
    console.log('Get: ' + url);
    return this.httpClient.get<Artist>(url);
  }

  getAlbums(artistId: number): Promise<Album[]> {
    return new Promise<Album[]>((resolve, reject) => {
      let albums: Album[] = [];
      this.getArtist(artistId)
        .toPromise()
        .then((artist) => {
          if (artist && artist.albums) {
            albums = artist.albums;
          }
          resolve(albums);
        });
    });
  }

  getAPIHost(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.httpClient
        .get('/assets/api-config.json')
        .toPromise()
        // tslint:disable-next-line:no-any
        .then((data: any) => {
          const url: string = data.SL_MUSIC_API_HOST;
          resolve(url);
        })
        .catch((err) => reject(err));
    });
  }
}

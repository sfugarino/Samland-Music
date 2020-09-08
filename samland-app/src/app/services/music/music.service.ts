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
    this.getAPIHost().then((data: string) => {
      this.musicServiceUrl = 'http://' + data + ':8080';
      console.log(this.musicServiceUrl);
    });
  }

  getArtists_old(): Observable<Artist[]> {
    let artists: Artist[] = [];
    artists = Object.assign(artists, artistsJson);
    return new Observable((observer: Observer<Artist[]>) => {
      observer.next(artists);
    });
  }

  getArtists(): Observable<Artist[]> {
    const url = this.musicServiceUrl + '/api/artist';
    return this.httpClient.get<Artist[]>(url);
  }

  getArtist_old(id: number): Observable<Artist | undefined> {
    let artists: Artist[] = [];
    artists = Object.assign(artists, artistsJson);
    const artist: Artist | undefined = artists.find((a: Artist) => {
      // tslint:disable-next-line: triple-equals
      return a.id == id;
    });

    return new Observable((observer: Observer<Artist | undefined>) => {
      observer.next(artist);
    });
  }

  getArtist(id: number): Observable<Artist> {
    const url = this.musicServiceUrl + '/api/artist/' + id.toString();
    return this.httpClient.get<Artist>(url);
  }

  getArtistPromise(id: number): Promise<Artist | undefined> {
    return new Promise<Artist | undefined>((resolve, reject) => {
      let artists: Artist[] = [];
      artists = Object.assign(artists, artistsJson);
      const artist: Artist | undefined = artists.find((a: Artist) => {
        // tslint:disable-next-line: triple-equals
        return a.id == id;
      });

      resolve(artist);
    });
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

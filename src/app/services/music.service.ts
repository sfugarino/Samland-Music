import { Injectable } from '@angular/core';
// @ts-ignore
import artistsJson from '../../assets/artist.json';
import { Artist } from './artist';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getArtists(): Observable<Artist[]> {
    let artists: Artist[] = [];
    artists = Object.assign(artists, artistsJson);
    return new Observable((observer: any) => {
      observer.next(artists);
    });
  }

  getArtist(id: number): Observable<Artist> {
    let artists: Artist[] = [];
    artists = Object.assign(artists, artistsJson);
    const artist = artists.find((a: Artist) => {
      // tslint:disable-next-line: triple-equals
      return (a.id == id);
    });

    console.log(artist);
    return new Observable((observer: any) => {
      observer.next(artist);
    });
  }

}

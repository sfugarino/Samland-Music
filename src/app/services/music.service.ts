import { Injectable } from '@angular/core';
// @ts-ignore
import artistsJson from '../../assets/artist.json';
import { Artist } from './artist';
import { BehaviorSubject, ReplaySubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getArtists(): Observable<Artist[]> {
    let artists: Artist[] = [];
    artists = Object.assign(artists, artistsJson);
    return new Observable((observer: Observer<Artist[]>) => {
      observer.next(artists);
    });
  }

  getArtist(id: number): Observable<Artist | undefined> {
    let artists: Artist[] = [];
    artists = Object.assign(artists, artistsJson);
    const artist: Artist | undefined = artists.find((a: Artist) => {
      // tslint:disable-next-line: triple-equals
      return (a.id == id);
    });

    console.log(artist);
    return new Observable((observer: Observer<Artist | undefined>) => {
      observer.next(artist);
    });
  }

}

import { Injectable, resolveForwardRef } from '@angular/core';
// @ts-ignore
import artistsJson from '../../assets/artist.json';
import { Artist } from './artist';
import { BehaviorSubject, ReplaySubject, Observable, Observer } from 'rxjs';
import { Album } from './album';

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

  getArtistPromise(id: number): Promise<Artist | undefined> {

    return new Promise<Artist | undefined>((resolve, reject) => {
      let artists: Artist[] = [];
      artists = Object.assign(artists, artistsJson);
      const artist: Artist | undefined = artists.find((a: Artist) => {
        // tslint:disable-next-line: triple-equals
        return (a.id == id);
      });

      console.log(artist);
      resolve(artist);
    });
  }

  getAlbums(artistId: number): Promise<Album[]> {

    return new Promise<Album[]>((resolve, reject) => {
      let albums: Album[] = [];
      this.getArtistPromise(artistId).then(artist => {
        if (artist && artist.albums) {
          albums = artist.albums;
        }
        resolve(albums);
      });
    });

  }
}

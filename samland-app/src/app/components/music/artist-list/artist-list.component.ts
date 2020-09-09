import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';
import { Artist } from '../../../models/artist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  artists: Observable<Artist[]> | undefined;
  loaded = false;
  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.artists = this.musicService.getArtists();
    this.loaded = true;
  }
}

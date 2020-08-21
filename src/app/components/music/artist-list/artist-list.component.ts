import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Artist } from '../../../services/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getArtists().subscribe(artists => {
      this.artists = artists;
    });
  }

}
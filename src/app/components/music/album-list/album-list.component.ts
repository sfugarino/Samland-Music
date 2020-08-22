import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/services/album';
import { Artist } from 'src/app/services/artist';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albums: Promise<Album[]> | undefined;

  constructor(private musicService: MusicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const artistId: number = this.route.snapshot.params.id;
    this.albums = this.musicService.getAlbums(artistId);
  }

}

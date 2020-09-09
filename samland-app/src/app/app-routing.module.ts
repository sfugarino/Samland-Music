import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { ArtistComponent } from './components/music/artist/artist.component';
import { SongComponent } from './components/music/song/song.component';
import { SongListComponent } from './components/music/song-list/song-list.component';
import { AlbumListComponent } from './components/music/album-list/album-list.component';
import { AlbumComponent } from './components/music/album/album.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { label: 'Home', showInSidebar: true },
  },
  {
    path: 'artist',
    component: MusicComponent,
    data: { label: 'Artist', showInSidebar: true },
  },
  {
    path: 'artist/:id',
    component: AlbumListComponent,
    data: { label: 'Albums', showInSidebar: false },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

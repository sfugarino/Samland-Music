import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { MusicComponent } from './components/music/music.component';
import { SongComponent } from './components/music/song/song.component';
import { AlbumComponent } from './components/music/album/album.component';
import { AlbumListComponent } from './components/music/album-list/album-list.component';
import { SongListComponent } from './components/music/song-list/song-list.component';
import { ArtistListComponent } from './components/music/artist-list/artist-list.component';
import { CommonModule } from '@angular/common';
import { MusicService } from './services/music.service';
import { ArtistComponent } from './components/music/artist/artist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AlbumDialogComponent } from './components/music/album-dialog/album-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    MusicComponent,
    SongComponent,
    AlbumComponent,
    AlbumListComponent,
    SongListComponent,
    ArtistComponent,
    ArtistListComponent,
    BreadcrumbComponent,
    AlbumDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

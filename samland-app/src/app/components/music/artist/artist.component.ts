import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../../models/artist';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input()
  artist: Artist | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  navigate(id: number): void {
    this.router.navigate(['artist', id]);
  }
}

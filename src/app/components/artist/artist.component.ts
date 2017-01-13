import { Router, ActivatedRoute } from '@angular/router';
import { Album } from './../../../album';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { Artist } from './../../../artist';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public id: string;
  public artist: Artist[];
  public albums: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe((artist) => {
              this.artist = artist;
          });
        this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          });
      });
  }
}

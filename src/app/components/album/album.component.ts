import { SpotifyService } from './../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from './../../../album';
import { Artist } from './../../../artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public id: string;
  public album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }
  

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe((album) => {
              this.album = album;
          });
      });
  }

}

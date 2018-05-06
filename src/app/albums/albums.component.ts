import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums = [];
  albums2 = [];
  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    // this.albums = ['album1', 'album2', 'album3', 'album4'];
    this.getAlbums();
    this.getAlbums2();
  }

  getAlbums(): void {
    this.albums = this.albumsService.getAlbums();
  }
  getAlbums2(): void {
    this.albumsService.album
      .subscribe(albums => this.albums2 = albums);
  }
}

import { Injectable } from '@angular/core';
// import {Observable} from "rxjs/Observable";
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Injectable()
export class AlbumsService {

  private albums = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  album = this.albums.asObservable;

  // constructor(){ }

  // getAlbums() {
  //   const albums = ['album1', 'album2', 'album3', 'album4'];
  //   return albums;
  // }

}

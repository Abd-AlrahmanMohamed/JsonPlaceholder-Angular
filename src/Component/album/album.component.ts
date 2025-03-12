import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IAlbum } from '../../ViewModels/ialbum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Component({
  selector: 'app-album',
  imports: [CommonModule,RouterModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  albums: IAlbum[] = [];
  constructor(private hClient: HttpClient) {}

  ngOnInit() {
    this.getAllAlbums().subscribe((res: IAlbum[]) => {
      this.albums = res;
    });
  }
  getAllAlbums(): Observable<IAlbum[]>
  {
    return this.hClient.get<IAlbum[]>(`${environment.apiUrl}albums`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAlbum } from '../../ViewModels/ialbum';
import { environment } from '../../enviroments/environment';

@Component({
  selector: 'app-album-details',
  imports: [],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
  albums: IAlbum | null = null;
  albumId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private hClient: HttpClient
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.getAlbumDetails(+albumId!).subscribe(album => {
      this.albums = album;
    });
  }

  getAlbumDetails(albumID: number): Observable<IAlbum>
  {
    return this.hClient.get<IAlbum>(`${environment.apiUrl}albums/${albumID}`)
  }

}


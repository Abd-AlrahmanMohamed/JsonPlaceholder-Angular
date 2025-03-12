import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../enviroments/environment';
import { Observable } from 'rxjs';
import { IPhotos } from '../../ViewModels/iphotos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './get-photos.component.html',
  styleUrl: './get-photos.component.scss'
})
export class GetPhotosComponent {
constructor(private hClient: HttpClient){}
  photos: IPhotos[] = [];
  ngOnInit() {
    this.getPhotos().subscribe((res: IPhotos[]) => {
      this.photos = res;
    });
  }
  getPhotos(): Observable<IPhotos[]> {
    return this.hClient.get<IPhotos[]>(`${environment.apiUrl}photos`);
  }

}

import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPosts } from '../../ViewModels/iposts';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
   posts: IPosts[] =[];
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    this.getAllPosts().subscribe((res: IPosts[]) => {
      this.posts = res;
    });
  }
getAllPosts(): Observable<IPosts[]> {
  return this.httpClient.get<IPosts[]>(`${environment.apiUrl}posts`);
}

}


import { IPosts } from './../../ViewModels/iposts';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  posts: IPosts | null = null;
  postId: number = 0;

  constructor(
    private hClient: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.getPostDetails(+postId!).subscribe(post => {
      this.posts = post;
    });
  }

  getPostDetails(postID: number): Observable<IPosts>
  {
    return this.hClient.get<IPosts>(`${environment.apiUrl}posts/${postID}`)
  }

}

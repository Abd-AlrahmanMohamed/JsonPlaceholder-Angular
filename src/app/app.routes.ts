import { Routes } from '@angular/router';
import { PostComponent } from '../Component/post/post.component';
import { AlbumComponent } from '../Component/album/album.component';
import { PostDetailsComponent } from '../Component/post-details/post-details.component';
import { GetPhotosComponent } from '../Component/get-photos/get-photos.component';
import { AlbumDetailsComponent } from '../Component/album-details/album-details.component';
import { AddUserComponent } from '../Component/add-user/add-user.component';

export const routes: Routes = [

    { path: '', component: PostComponent },
    { path: 'post/:id', component: PostDetailsComponent },
    { path: 'albums', component: AlbumComponent },
    { path: 'album/:id', component: AlbumDetailsComponent},
    { path: 'photos', component: GetPhotosComponent },
    { path: 'adduser', component: AddUserComponent },
    // { path: '', redirectTo: '/post', pathMatch: 'full' },
    // ... other routes
];

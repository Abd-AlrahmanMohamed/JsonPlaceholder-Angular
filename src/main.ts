import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { PostComponent } from './Component/post/post.component';
import { routes } from './app/app.routes';

// Define the routes in provideRouter
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));

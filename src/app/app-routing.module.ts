import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'contactus',
    pathMatch: 'full'
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'blog',
    // redirectTo: 'contactus',
    // pathMatch: 'full',
    children: [
      {
        path: 'posts',
        component: BlogComponent
      },
      {
        path: 'posts/:pId',
        component: BlogPostComponent
      }
    ]
  },
  {
    path: 'contactus',
    component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

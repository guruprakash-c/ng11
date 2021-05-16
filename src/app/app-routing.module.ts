import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    outlet: 'router1'
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    outlet: 'router1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

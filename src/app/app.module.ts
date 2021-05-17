import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { AppErrorComponent } from './app-error/app-error.component';
import { SubscriberGuard } from './subscriber.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    BlogComponent,
    BlogPostComponent,
    AppErrorComponent
  ],
  providers: [AuthenticatorResponse, SubscriberGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

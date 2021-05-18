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
import { AuthGuard } from './auth.guard';
import { PostarticlesModule } from './postarticles/postarticles.module';
import { PostArticlesGuard } from './post-articles.guard';
import { UnsavedGuard } from './unsaved.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, PostarticlesModule],
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
  providers: [
    AuthenticatorResponse,
    SubscriberGuard,
    AuthGuard,
    PostArticlesGuard,
    UnsavedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

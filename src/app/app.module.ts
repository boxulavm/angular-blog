import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkingAreaComponent } from './working-area/working-area.component';
import { LoaderComponent } from './loader/loader.component';
import { FullPostComponent } from './full-post/full-post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkingAreaComponent,
    LoaderComponent,
    FullPostComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: WorkingAreaComponent},
      {path: 'post/:postId', component: FullPostComponent},
      {path: 'user/:userId', component: UserProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

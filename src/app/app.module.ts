import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

import { ObservableService } from './services/observable.service';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';
import { ObservableUserService } from './services/observableUser.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestObservableComponent,
    ObservableuserComponent,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ObservableService,
    ObservableUserService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

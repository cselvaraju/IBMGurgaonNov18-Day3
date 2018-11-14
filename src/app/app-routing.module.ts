import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { PostsComponent } from './components/posts/posts.component';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'parentchild', component: ParentComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: ObservableuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

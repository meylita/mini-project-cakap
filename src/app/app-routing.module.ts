import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorNotfoundComponent } from './error-notfound/error-notfound.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: '', redirectTo: 'signin', pathMatch: 'full'
      },    
      {
        path: "signin",
        component: GithubComponent,
      },
      {
        path: "profile/:username",
        component: ProfileComponent,
      },
      {
        path: ":username/repository",
        component: RepositoryComponent,
      },
      {
        path: "**",
        component: ErrorNotfoundComponent
      }
    ]
  },
  // {
  //   path: "**",
  //   component: ErrorNotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
// Mat Module
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
// Service
import {AccountGitService} from './Service/account-git.service'

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { from } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';
import { ErrorNotfoundComponent } from './error-notfound/error-notfound.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    ProfileComponent,
    ErrorNotfoundComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [AccountGitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

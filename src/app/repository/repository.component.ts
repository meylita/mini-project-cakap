import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountGitService } from '../Service/account-git.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  repo: any;
  data: any;

  constructor(private router: Router, private userService: AccountGitService, private _location: Location) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras 
    this.repo = state
    console.log(this.repo, 'repo');
    
   }

  ngOnInit(): void {
    this.getDataRepo();
  }

  getDataRepo() {
    const params = []
    params.push(this.repo)
    console.log(params, 'params');

    this.userService.repositoryUser(params).subscribe(res => {
        this.data = res[0];
        console.log(this.data, 'data')
    })
  }

  back() {
    this._location.back();
  }

}

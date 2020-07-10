import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountGitService } from '../Service/account-git.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: any;
  data: any;

  constructor(private router: Router, private userService: AccountGitService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras 
    this.name = state
    
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    const params = []
    params.push(this.name)
    
    this.userService.search(params).subscribe(res => {
        this.data = res;
    })
  }

  onClick() {
    this.router.navigate(['/'+this.name+'/repository'], this.name)
  }

}


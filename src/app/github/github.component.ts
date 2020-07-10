import { Component, OnInit, Input } from '@angular/core';
import { AccountGitService } from '../Service/account-git.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  search: any;
  user: any;

  constructor(private userService: AccountGitService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getUsers().subscribe(res => {
      const data = res
      console.log(data, 'dataUser')
    } )
  }

  getSingle() {
    const params = []
    params.push(this.search)
    console.log(params, 'params');
    
    this.userService.search(params).subscribe(res => {
        const data = res;
        console.log(data, 'data')
        this.router.navigate(['profile/'+this.search], this.search)
    }, 
    e => {
      this.notFound();
    } 
    )
  }

  searchUser(value) {
    console.log(value, 'value');
      this.search = value;
      this.getSingle();
  }

  notFound() {
    // console.log(e, 'e');
    
    this.router.navigate(['/**'])
  }
}

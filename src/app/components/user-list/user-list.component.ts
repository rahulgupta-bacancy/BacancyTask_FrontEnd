import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/utils/service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList;
  loading = false;
  searchText;
  constructor(
    private route: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

//get initial users 
  getAllUsers() {
    this.loading = true;
    this.userService.userList().subscribe(
      data => {

        this.loading = false;
        this.userList = data;
      }
    )
  }

  //for infinite scrolling 
  onScroll() {
    //pass the number of data we want to skip in param    
    this.userService.userList(this.userList.length).subscribe(
      data => {
        this.userList = this.userList.concat(data);
      }
    )
  }

  //remove the token from localstorage and navigate to login route
  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['login'])
  }
}

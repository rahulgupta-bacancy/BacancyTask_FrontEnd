import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/utils/service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList;
  constructor(
    private userService:UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    this.userService.userList().subscribe(
      data=>{
        this.userList= data;
      }
    )
  }
  onScroll(){
    console.log("scroll")
    this.userService.userList(this.userList.length).subscribe(
      data=>{
     this.userList=   this.userList.concat(data);
      }
    )
  }
}
